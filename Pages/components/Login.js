import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    Image,
    Dimensions,
    Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import loadFonts from "../../Style/load";

const { width, height } = Dimensions.get("window");

const LoginPage = () => {
    const navigation = useNavigation();
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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
        return null; // Render nothing while fonts are loading
    }

    const handleLogin = () => {
        // Validate temporary account credentials
        if (
            username === "group1@liceo.edu.ph" &&
            password === "ilovemygroupmates"
        ) {
            navigation.navigate("Dashboard");
        } else {
            Alert.alert(
                "Invalid Credentials",
                "Please check your username and password."
            );
        }
    };

    const handleLoginAsVisitor = () => {
        Alert.alert(
            "Logged in as Visitor",
            "You are now interacting with this app as a visitor."
        );
        navigation.navigate("DashboardVisitor");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <Text style={styles.welcomeText}>
                        WELCOME TO{"\n"}ExploreLDCU!
                    </Text>
                    <View style={styles.loginContainer}>
                        <Text style={styles.headerText}>
                            LOGIN WITH CORPORATE ACCOUNT
                        </Text>
                        <View style={styles.row}>
                            <Text style={styles.label}>Username:</Text>
                            <TextInput
                                style={styles.input}
                                value={username}
                                onChangeText={setUsername}
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Password:</Text>
                            <TextInput
                                style={styles.input}
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>
                        <View style={styles.actionContainer}>
                            <TouchableOpacity
                                style={styles.enterContainer}
                                onPress={handleLogin}
                            >
                                <Text style={styles.enterText}>ENTER</Text>
                            </TouchableOpacity>
                            <Text style={styles.orText}>OR</Text>
                            <TouchableOpacity
                                style={styles.visitorContainer}
                                onPress={handleLoginAsVisitor}
                            >
                                <Text style={styles.visitorText}>
                                    LOGIN AS VISITOR
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
                        <Image
                            source={require("../../Images/liceo.png")}
                            style={styles.logo}
                        />
                        <Text style={styles.footerText}>Property Of</Text>
                        <Text style={styles.footerTextBold}>
                            Grade 12 - STEM 30 (RESEARCH GROUP 1)
                        </Text>
                        <Text style={styles.footerText}>
                            Liceo de Cagayan University - Main Campus
                        </Text>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: "#761d1d",
    },
    welcomeText: {
        textAlign: "center",
        fontSize: height * 0.06,
        fontFamily: "Anton-Regular",
        color: "#f9b210",
    },
    loginContainer: {
        backgroundColor: "#1f2a50",
        width: "90%",
        alignSelf: "center",
        borderRadius: 30,
        padding: "5%",
    },
    headerText: {
        color: "white",
        fontSize: height * 0.028,
        textAlign: "center",
        fontFamily: "Anton-Regular",
        marginBottom: height * 0.02,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: height * 0.03, // Increased spacing between fields
    },
    label: {
        color: "#f9b210",
        fontFamily: "Anton-Regular",
        backgroundColor: "#761d1d",
        fontSize: height * 0.02,
        textAlign: "center",
        width: "30%",
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 10, // Added margin between label and input
    },
    input: {
        flex: 1,
        backgroundColor: "#F2F2F2",
        height: 40,
        borderRadius: 20,
        paddingLeft: 16,
        fontSize: height * 0.02,
        paddingVertical: 8, // Added padding to the input field
    },
    actionContainer: {
        alignItems: "center",
    },
    enterContainer: {
        backgroundColor: "#761d1d",
        borderRadius: 20,
        paddingVertical: height * 0.002,
        paddingHorizontal: 35,
        marginBottom: 10,
    },
    enterText: {
        color: "#f9b210",
        fontSize: height * 0.03,
        fontFamily: "Anton-Regular",
    },
    orText: {
        color: "#f9b210",
        fontSize: height * 0.03,
        fontFamily: "Anton-Regular",
        marginBottom: 10,
    },
    visitorContainer: {
        backgroundColor: "#761d1d",
        borderRadius: 20,
        paddingVertical: height * 0.01,
        paddingHorizontal: 20,
    },
    visitorText: {
        color: "#f9b210",
        fontSize: height * 0.025,
        fontFamily: "Anton-Regular",
    },
    bottomContainer: {
        alignItems: "center",
        marginTop: height * 0.02,
    },
    logo: {
        width: width * 0.3,
        height: width * 0.3,
        marginBottom: 10,
    },
    footerText: {
        fontFamily: "Roboto-Regular",
        color: "white",
        textAlign: "center",
    },
    footerTextBold: {
        fontFamily: "Anton-Regular",
        color: "white",
        textAlign: "center",
    },
});

export default LoginPage;
