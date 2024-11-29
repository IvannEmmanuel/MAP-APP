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
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";

const { width, height } = Dimensions.get("window");

const Locate = ({ route }) => {
  const { latitude, longitude, infoHeader } = route.params || {};
  const [userLocation, setUserLocation] = useState(null);
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [distance, setDistance] = useState(null);
  const [startingPoint, setStartingPoint] = useState(null);
  const locationUpdateInterval = useRef(null);
  const mapRef = useRef(null);

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
            timeInterval: 2000,
            distanceInterval: 5,
          },
          (location) => {
            const currentLocation = {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            };

            if (locationUpdateInterval.current) {
              clearTimeout(locationUpdateInterval.current);
            }

            locationUpdateInterval.current = setTimeout(() => {
              setUserLocation(currentLocation);

              mapRef.current?.animateToRegion({
                ...currentLocation,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001,
              });

              fetchRoute(currentLocation);

              const distanceInKm = calculateDistance(currentLocation, {
                latitude,
                longitude,
              });
              setDistance(distanceInKm);
            }, 500);
          }
        );

        const initialLocation = await Location.getCurrentPositionAsync({});
        setStartingPoint({
          latitude: initialLocation.coords.latitude,
          longitude: initialLocation.coords.longitude,
        });
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
        const API_KEY = "AlzaSysyZrf5dxSF-YGCayKSjygWOusxkXsFDcC";
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
          
          // Set the starting point to the first point of the polyline
          if (decodedPolyline.length > 0) {
            setStartingPoint(decodedPolyline[0]);
          }
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
                {startingPoint && (
                  <Marker
                    coordinate={startingPoint}
                    title="Starting Point"
                    pinColor="#1E90FF"
                  >
                    <Image
                      source={require("../../Images/location.png")}
                      style={{ width: 40, height: 40 }}
                    />
                  </Marker>
                )}

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
                    strokeWidth={4}
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
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Locating...</Text>
          </View>
        )
      ) : (
        <Text style={styles.infoText}>Invalid Location Data</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 16,
    color: "#1E90FF",
    marginTop: 10,
  },
  distanceContainer: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: [{ translateX: -width * 0.3 }, { translateY: height * 0.33 }],
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 10,
    borderRadius: 8,
    width: width * 0.6,
    alignItems: "center",
    justifyContent: "center",
  },
  distanceBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
});

export default Locate;

