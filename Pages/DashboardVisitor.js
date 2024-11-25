import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import loadFonts from "../Style/load";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Map from "./Screen/Map";
import Profile from "./Screen/Profile";
import Locate from "./Screen/Locate";

// Stack and Tab Navigators
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Get screen width and height for responsiveness
const { width, height } = Dimensions.get("window");

// Tab Navigator for the Dashboard
const DashboardVisitor = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Load custom fonts
  useEffect(() => {
    const load = async () => {
      try {
        await loadFonts();
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    };

    load();
  }, []);

  // Show notification once with delay
  useEffect(() => {
    const load = async () => {
      try {
        await loadFonts();
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    };

    load();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tab.Navigator
      initialRouteName="Map"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Map":
              iconName = "map";
              break;
            case "Profile":
              iconName = "person";
              break;
            case "Locate":
              iconName = "locate";
              break;
            default:
              iconName = "map";
          }

          const iconColor = focused ? "#F2F2F2" : "#f9b210";
          const iconSize = focused ? size * 1.3 : width * 0.07;

          return (
            <View
              style={[
                styles.iconContainer,
                focused && styles.focusedIconContainer,
              ]}
            >
              <Ionicons name={iconName} size={iconSize} color={iconColor} />
            </View>
          );
        },
        tabBarLabel: ({ focused }) => {
          const fontSize = width * 0.02;
          return focused ? (
            <Text style={[styles.tabBarLabel, { fontSize }]}>
              {route.name.toUpperCase()}
            </Text>
          ) : null;
        },
        tabBarStyle: {
          height: height * 0.08,
          paddingBottom: 5,
          backgroundColor: "#1f2a50",
        },
      })}
    >
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Locate" component={Locate} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default DashboardVisitor;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.02,
    width: width * 0.12,
    height: width * 0.12,
  },
  focusedIconContainer: {
    backgroundColor: "#761d1d",
    borderTopRightRadius: width * 0.06,
    borderTopLeftRadius: width * 0.06,
    marginTop: -height * 0.05,
    width: width * 0.11,
    height: width * 0.13,
  },
  tabBarLabel: {
    color: "#f9b210",
    fontFamily: "Poppins-Bold",
    textAlign: "center",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingTop: height * 0.1,
  },
});
