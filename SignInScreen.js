import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

const SignInScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("./assets/food3.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Get your groceries with nectar</Text>
        <TextInput
          style={styles.input}
          placeholder="+880"
          keyboardType="phone-pad"

        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("EnterNumber")}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>Or connect with social media</Text>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "60%",
    justifyContent: "flex-end",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.8)", 
    padding: 20,
    alignItems: "",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#53B175",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
    alignItems:"center"
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  orText: {
    marginTop: 20,
    fontSize: 16,
    color: "gray",
  },
  socialButton: {
    backgroundColor: "#E3E3E3",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignInScreen;