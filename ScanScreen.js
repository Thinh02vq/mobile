import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, useRoute } from '@react-navigation/native';

const Stack = createStackNavigator();

const ScanScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { image } = route.params || { image: require('./assets/pizza.png') };

  return (
    <View style={styles.container}>
    {/* Nút quay lại */}
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
    
    {/* Khu vực quét */}
    <View style={styles.scanArea}>
      <Image source={image} style={styles.productImage} />
    </View>
    
    {/* Thông tin sản phẩm */}
    <View style={styles.productCard}>
        <Image source={image} style={styles.productImage}/>
        <View style={styles.productInfo}>
          <Text style={styles.owner}>Lauren's</Text>
          <Text style={styles.productName}>Orange Juice</Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    paddingTop: 40,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  scanArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 15,
    marginTop: 50,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  owner: {
    fontSize: 14,
    color: 'gray',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 10,
  },
});

export default ScanScreen;
