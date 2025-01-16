import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  ActivityIndicator,
  Alert,
  Image,
} from "react-native";
import MapView, { Marker, Polyline, AnimatedRegion } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";

const { width, height } = Dimensions.get("window");

const Locate = ({ route }) => {
  const { latitude, longitude, infoHeader } = route.params || {};
  const [userLocation, setUserLocation] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [distance, setDistance] = useState(null);
  const locationUpdateInterval = useRef(null);
  const mapRef = useRef(null);
  const animatedRegion = useRef(
    new AnimatedRegion({
      latitude: userLocation?.latitude || 0,
      longitude: userLocation?.longitude || 0,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    })
  ).current;

  const decodePolyline = (encoded) => {
    let points = [];
    let index = 0,
      len = encoded.length;
    let lat = 0,
      lng = 0;

    while (index < len) {
      let b,
        shift = 0,
        result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlat = result & 1 ? ~(result >> 1) : result >> 1;
      lat += dlat;

      shift = 0;
      result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlng = result & 1 ? ~(result >> 1) : result >> 1;
      lng += dlng;

      points.push({ latitude: lat / 1e5, longitude: lng / 1e5 });
    }
    return points;
  };

  const calculateDistance = (loc1, loc2) => {
    const toRad = (value) => (value * Math.PI) / 180;

    const R = 6371; // Radius of Earth in kilometers
    const dLat = toRad(loc2.latitude - loc1.latitude);
    const dLon = toRad(loc2.longitude - loc1.longitude);

    const lat1 = toRad(loc1.latitude);
    const lat2 = toRad(loc2.latitude);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distanceInKm = R * c;

    return distanceInKm;
  };

  useEffect(() => {
    if (!latitude || !longitude) return;

    let locationSubscription = null;

    const startLocationTracking = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Permission Denied", "Location permission is required.");
          setLoading(false);
          return;
        }

        locationSubscription = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.Highest,
            timeInterval: 1000, // Minimum time (ms) between updates
            distanceInterval: 1, // Minimum distance (meters) between updates
          },
          (location) => {
            const currentLocation = {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            };

            // Debounce the location update
            if (locationUpdateInterval.current) {
              clearTimeout(locationUpdateInterval.current);
            }

            locationUpdateInterval.current = setTimeout(() => {
              // Smoothly animate the marker position
              animatedRegion
                .timing({
                  latitude: currentLocation.latitude,
                  longitude: currentLocation.longitude,
                  duration: 1000,
                  useNativeDriver: false,
                })
                .start();

              setUserLocation(currentLocation);

              mapRef.current?.animateToRegion({
                ...currentLocation,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001,
              });

              fetchRoute(currentLocation);

              // Calculate distance and set it
              const distanceInKm = calculateDistance(currentLocation, {
                latitude,
                longitude,
              });
              setDistance(distanceInKm);
            }, 1000); // Wait for 1 second of no updates before moving the marker
          }
        );

        const initialLocation = await Location.getCurrentPositionAsync({});
        fetchRoute({
          latitude: initialLocation.coords.latitude,
          longitude: initialLocation.coords.longitude,
        });
      } catch (error) {
        console.error("Error setting up location tracking:", error);
        Alert.alert("Error", "Unable to track location.");
        setLoading(false);
      }
    };

    const fetchRoute = async (currentLocation) => {
      try {
        const API_KEY = "AlzaSy3dSZqZImng_QJILlbwR24DkQP5IwI-wgE";
        const origin = `${currentLocation.latitude},${currentLocation.longitude}`;
        const destination = `${latitude},${longitude}`;
        const url = `https://maps.gomaps.pro/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${API_KEY}`;

        const response = await axios.get(url);

        const points = response.data.routes[0]?.overview_polyline?.points;

        if (points) {
          let decodedPolyline = decodePolyline(points);

          const lastPoint = decodedPolyline[decodedPolyline.length - 1];
          if (
            lastPoint.latitude !== latitude ||
            lastPoint.longitude !== longitude
          ) {
            decodedPolyline.push({ latitude, longitude });
          }

          setRouteCoordinates(decodedPolyline);
        } else {
          console.warn("Could not fetch the route.");
        }
      } catch (error) {
        console.error("Error fetching directions:", error);
      } finally {
        setLoading(false);
      }
    };

    startLocationTracking();

    return () => {
      if (locationSubscription) {
        locationSubscription.remove();
      }
    };
  }, [latitude, longitude]);

  const formatDistance = () => {
    if (distance === null) return "";
    return distance < 1
      ? `${(distance * 1000).toFixed(0)} meters`
      : `${distance.toFixed(2)} kilometers`;
  };

  return (
    <View style={styles.container}>
      {latitude && longitude ? (
        userLocation ? (
          loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#1E90FF" />
              <Text style={styles.loadingText}>Loading...</Text>
            </View>
          ) : (
            <>
              <MapView
                ref={mapRef}
                style={styles.map}
                initialRegion={{
                  latitude: userLocation.latitude,
                  longitude: userLocation.longitude,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                }}
                mapType="hybrid"
                urlTemplate="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              >
                <Marker.Animated
                  coordinate={animatedRegion}
                  title="Your Location"
                  pinColor="#1E90FF"
                >
                  <Image
                    source={require("../../Images/location.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </Marker.Animated>

                <Marker
                  coordinate={{ latitude, longitude }}
                  title={infoHeader}
                  pinColor="#32CD32"
                >
                  <Image
                    source={require("../../Images/destination.png")}
                    style={{ width: 50, height: 50 }}
                  />
                </Marker>

                {routeCoordinates.length > 0 && (
                  <Polyline
                    coordinates={routeCoordinates}
                    strokeWidth={6}
                    strokeColor="#1E90FF"
                  />
                )}
              </MapView>
              <View style={styles.distanceContainer}>
                <View style={styles.distanceBox}>
                  <Image
                    source={require("../../Images/destination.png")}
                    style={styles.distanceIcon}
                  />
                  <Text style={styles.distanceText}>
                    Distance: {formatDistance()}
                  </Text>
                </View>
              </View>
            </>
          )
        ) : (
          <Text style={styles.errorText}>
            Unable to fetch your location. Please wait or try again.
          </Text>
        )
      ) : (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>
            Please select a destination first
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  map: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
  distanceContainer: {
    position: "absolute",
    left: "50%", // Horizontally center it
    top: "50%", // Vertically center it
    transform: [{ translateX: -width * 0.3 }, { translateY: height * 0.33 }], // Adjust the position
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 10,
    borderRadius: 8,
    width: width * 0.6, // You can adjust this width
    alignItems: "center", // Centers the content horizontally
    justifyContent: "center", // Centers the content vertically
  },
  distanceBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // This ensures the icon and text are centered together
  },
  distanceIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  distanceText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  errorText: {
    textAlign: "center",
    color: "red",
    fontSize: 16,
  },
  messageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  messageText: {
    fontSize: 18,
    color: "#333",
  },
});

export default Locate;
