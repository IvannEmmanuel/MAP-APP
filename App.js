import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Modal, StyleSheet } from "react-native";
import Login from "./Pages/components/Login";
import Dashboard from "./Pages/Dashboard";
import Founding from "./Pages/Screen/Events/FoundingAnniversary";
import LiceoGames from "./Pages/Screen/Events/LiceoGames";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Founding" component={Founding} />
                <Stack.Screen name="LiceoGames" component={LiceoGames} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
