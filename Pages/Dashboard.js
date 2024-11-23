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
import Calendar from "./Screen/Calendar";
import Notification from "./Screen/Notification";
import Profile from "./Screen/Profile";
import Locate from "./Screen/Locate";
import FoundingAnniversary from "./Screen/Events/FoundingAnniversary";
import LiceoGames from "./Screen/Events/LiceoGames";

// Stack and Tab Navigators
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Get screen width and height for responsiveness
const { width, height } = Dimensions.get("window");

const Dashboard = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const events = [
        {
            id: 1,
            title: "ANNOUNCEMENT ON FEBRUARY 24",
            message: "70TH FOUNDING ANNIVERSARY CELEBRATION!",
            image: require("../Images/liceo-maroon.png"),
        },
    ];

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
        if (fontsLoaded) {
            const timer = setTimeout(() => {
                setShowNotification(true);
            }, 3000); // 3 second delay after loading fonts

            // Clear the timeout when component unmounts
            return () => clearTimeout(timer);
        }
    }, [fontsLoaded]);

    // Close the notification modal
    const closeNotification = () => {
        setShowNotification(false);
    };

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* Tab Navigator Screen */}
            <Stack.Screen name="Main" component={MainTabs} />
            {/* Event screens */}
            <Stack.Screen name="Founding">
                {(props) => (
                    <FoundingAnniversary
                        {...props}
                        goBackToNotification={() =>
                            props.navigation.navigate("Main", {
                                screen: "Notification",
                            })
                        }
                    />
                )}
            </Stack.Screen>
            <Stack.Screen name="LiceoGames">
                {(props) => (
                    <LiceoGames
                        {...props}
                        goBackToNotification={() =>
                            props.navigation.navigate("Main", {
                                screen: "Notification",
                            })
                        }
                    />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

// Tab Navigator for the Dashboard
const MainTabs = () => {
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
                        case "Calendar":
                            iconName = "calendar";
                            break;
                        case "Notification":
                            iconName = "notifications";
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
                            <Ionicons
                                name={iconName}
                                size={iconSize}
                                color={iconColor}
                            />
                        </View>
                    );
                },
                tabBarLabel: ({ focused }) => {
                    const fontSize = width * 0.023;
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
            <Tab.Screen name="Calendar" component={Calendar} />
            <Tab.Screen name="Locate" component={Locate} />
            <Tab.Screen name="Notification" component={Notification} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default Dashboard;

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
});