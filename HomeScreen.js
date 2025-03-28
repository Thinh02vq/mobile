import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView, ImageBackground } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      {/* Header */}
      <View style={{ flexDirection: "row", alignItems: "center", padding: 15, backgroundColor: "#F8F8F8", borderBottomLeftRadius: 20, borderBottomRightRadius: 20, elevation: 5 }}>
      <Image source={require("./assets/avatar.png")} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }} />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 12, color: "gray" }}>Your Location</Text>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Savar, Dhaka</Text>
      </View>
      <TouchableOpacity>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>

      {/* Search Bar */}
      <View style={{ flexDirection: "row", backgroundColor: "#4A43EC", borderRadius: 10, padding: 10, marginVertical: 15 }}>
        <FontAwesome name="search" size={30} color="white" style={{ marginRight: 20 }} />
        <TextInput placeholder="Search your food" style={{ flex: 1 }} />
        <Ionicons name="filter" size={30} color="white" />
      </View>

      {/* Category Tabs */}
      <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 15 }}>
      <ScrollView horizontal>
        <View style={{ marginRight: 10 }}>
          <Image source={require("./assets/burger-icon.jpg")} style={{ width: 80, height: 80, borderRadius: 10 }} />
          <Text style={{ textAlign: "center" }}>BURGER</Text>
        </View>
        <View>
          <Image source={require("./assets/pizza-icon.jpg")} style={{ width: 150, height: 80, borderRadius: 10 }} />
          <Text style={{ textAlign: "center" }}>PIZZA</Text>
        </View>
        <View>
          <Image source={require("./assets/drink-icon.jpg")} style={{ width: 100, height: 80, borderRadius: 10 }} />
          <Text style={{ textAlign: "center" }}>DRINK</Text>
        </View>
      </ScrollView>  
      </View>

      {/* Featured Item */}
      <View style={{ borderRadius: 10, overflow: "hidden", marginBottom: 20 }}>
        <ImageBackground 
          source={require("./assets/burger.png")} 
          style={{ width: "110%", height: 150, justifyContent: "flex-end", padding: 10 }}
          resizeMode="cover"
        >
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }}>BURGER</Text>
          <Text style={{ color: "white", fontSize: 14 }}>Today's Hot Offer</Text>
          <Text style={{ fontSize: 14, color: "yellow" }}>⭐ 4.8 (3k+ Rating)</Text>
        </ImageBackground>
      </View>
<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: 10 }}>
      {/* Popular Items */}
      <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10 }}>Popular Items</Text>
      <Text style={{ fontSize: 14, fontWeight: "bold", marginBottom: 10 }}>View All</Text>
      </View>
      <ScrollView horizontal>
        <View style={{ marginRight: 10 }}>
          <Image source={require("./assets/burger.png")} style={{ width: 170, height: 200, borderRadius: 10 }} />
          <Text style={{ textAlign: "center" }}>BURGER</Text>
        </View>
        <View>
          <Image source={require("./assets/pizza.png")} style={{ width: 170, height: 200, borderRadius: 20 }} />
          <Text style={{ textAlign: "center" }}>PIZZA</Text>
        </View>
      </ScrollView>  
    </ScrollView>
  );
};

export default HomeScreen;
