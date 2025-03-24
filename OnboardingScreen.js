import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

const OnboardingScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require("./assets/onboarding.jpg")} style={styles.background}>
      <View style={styles.container}>
        {/* Icon */}
        <Image source={require("./assets/carrot-icon.png")} style={styles.icon} />

        {/* Nội dung chính */}
        <Text style={styles.title}>Welcome to our store</Text>
        <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>

        {/* Nút bắt đầu */}
        <TouchableOpacity style={styles.button}
            styles={styles.button}
            onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // Giữ tỉ lệ ảnh nền
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    padding: 20,
  },
  icon: {
    width: 50, 
    height: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
    marginTop: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#6BCB77",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default OnboardingScreen;
