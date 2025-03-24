import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const EnterNumberScreen = ({ navigation }) => {
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your mobile number</Text>
      <TextInput
        style={styles.input}
        placeholder="+880"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Verification")}
      >
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

export default EnterNumberScreen;
