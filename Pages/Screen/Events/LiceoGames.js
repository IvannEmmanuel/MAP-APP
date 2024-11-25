import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, StackActions } from "@react-navigation/native";
import loadFonts from "../../../Style/load";

const { width, height } = Dimensions.get("window");

const LiceoGames = ({ goBackToNotification }) => {
    const navigation = useNavigation();
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

    if (!fontsLoaded) {
        return null; // Prevent rendering until fonts are loaded
    }

    // Bugged ni
    // const handleGoBackToNotification = () => {
    //     if (typeof goBackToNotification === "function") {
    //         goBackToNotification();
    //     } else {
    //         navigation.navigate("MainTabs", { screen: "Notification" });
    //     }
    // };

    const onClose = () => {
        if (navigation.canGoBack()) {
            navigation.goBack();
        } else {
            console.log("No previous screen to go back to.");
        }
    };

    return (
        <ImageBackground
            source={require("../../../Images/CalendarBackground.jpg")}
            style={[styles.container, { width, height }]}
            resizeMode="cover"
        >
            <View style={styles.cardContainer}>
                {/* Logo and Title */}
                <View style={styles.headerContainer}>
                    <Image
                        source={require("../../../Images/liceo-maroon.png")}
                        style={styles.logo}
                    />
                    <Text style={styles.titleText}>LICEO GAMES 2024</Text>
                </View>

                {/* Agenda */}
                <Text style={styles.sectionTitle}>AGENDA:</Text>
                <Text style={styles.bodyText}>
                    GET READY FOR AN EXCITING LINEUP OF SPORTS AND ACTIVITIES
                    THAT WILL BRING OUT THE BEST OF LICEAN SPIRIT.
                </Text>

                {/* Venue */}
                <Text style={styles.sectionTitle}>VENUE:</Text>
                <Text style={styles.bodyText}>
                    @LICEO DE CAGAYAN UNIVERSITY - MAIN CAMPUS
                </Text>

                {/* Date & Time */}
                <Text style={styles.sectionTitle}>DATE & TIME:</Text>
                <Text style={styles.bodyText}>OCTOBER 21-25, 2024</Text>

                {/* Close Button */}
                <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                    <Text style={styles.closeButtonText}>CLOSE</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default LiceoGames;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    cardContainer: {
        backgroundColor: "#1f2a50",
        width: "90%",
        borderRadius: height * 0.02,
        padding: width * 0.05,
        alignItems: "center",
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: height * 0.02,
    },
    logo: {
        height: height * 0.1,
        width: width * 0.2,
        marginRight: width * 0.03,
    },
    titleText: {
        color: "white",
        fontSize: width * 0.075,
        fontWeight: "bold",
        textAlign: "center",
        flexShrink: 1,
        fontFamily: "Source-Sans-Pro-Bold",
    },
    sectionTitle: {
        color: "#f1eee7",
        fontSize: width * 0.06,
        fontWeight: "bold",
        alignSelf: "flex-start",
        marginTop: height * 0.015,
        fontFamily: "Source-Sans-Pro-Bold",
    },
    bodyText: {
        backgroundColor: "#737373",
        marginTop: height * 0.01,
        padding: width * 0.04,
        borderRadius: width * 0.05,
        color: "white",
        fontSize: width * 0.055,
        lineHeight: height * 0.03,
        textAlign: "center",
        width: "95%",
        fontFamily: "Source-Sans-Pro-Bold",
    },
    closeButton: {
        marginTop: height * 0.03,
        backgroundColor: "#761d1d",
        paddingVertical: height * 0.01,
        paddingHorizontal: width * 0.1,
        borderRadius: width * 0.025,
    },
    closeButtonText: {
        color: "white",
        fontSize: width * 0.065,
        fontWeight: "bold",
        fontFamily: "Source-Sans-Pro-Bold",
    },
});
