import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Button } from "react-native-paper";

const SignInScreen = ({ navigation }) => {
  return (
        <View style={styles.container}>
            <Image source={require("./assets/food1.png")} style={styles.image} />
            <Text style={styles.title}>Get your groceries with nectar</Text>
            
            <TouchableOpacity
                style={styles.inputContainer}
                onPress={() => navigation.navigate("EnterNumber")}
            >
                <Text style={styles.inputText}>+880 | Enter your mobile number</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>Or connect with social media</Text>

            <Button mode="contained" icon="google" style={styles.button}>
                Continue with Google
            </Button>
            <Button mode="contained" icon="facebook" style={styles.button}>
                Continue with Facebook
            </Button>
        </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  image: {
    width: '110%',
    height: '60%',
    resizeMode: "cover",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    padding: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
  },
  inputText: {
    fontSize: 16,
    color: "gray",
  },
  orText: {
    marginVertical: 20,
    fontSize: 14,
    color: "gray",
  },
  button: {
    width: "100%",
    marginVertical: 5,
    backgroundColor: "#3b5998",
  },
});

export default SignInScreen;
