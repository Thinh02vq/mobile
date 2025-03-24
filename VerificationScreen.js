import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const VerificationScreen = ({ navigation }) => {
  const [code, setCode] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your 4-digit code</Text>
      <TextInput
        style={styles.input}
        placeholder="----"
        keyboardType="numeric"
        maxLength={4}
        value={code}
        onChangeText={setCode}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>→</Text>
      </TouchableOpacity>
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
    title: {
      fontSize: 20,
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
      fontSize: 18,
      marginTop: 10,
      padding: 5,
      textAlign: "center",
    },
    button: {
      marginTop: 20,
      backgroundColor: "#6BCB77",
      padding: 10,
      borderRadius: 50,
    },
    buttonText: {
      fontSize: 24,
      color: "#fff",
    },
  });
export default VerificationScreen;
