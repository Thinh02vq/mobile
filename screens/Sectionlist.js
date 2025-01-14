import React from 'react';
import { SectionList, View, Text, Alert, TouchableOpacity, StyleSheet, Button } from 'react-native';

const SectionListScreen = ({ navigation }) => {
  const groupedProducts = [
    { title: 'Category A', data: ['Product A1', 'Product A2', 'Product A3'] },
    { title: 'Category B', data: ['Product B1', 'Product B2'] },
    { title: 'Category C', data: ['Product C1', 'Product C2', 'Product C3'] },
  ];

  const handlePress = (productName) => {
    Alert.alert('Thông báo', `Bạn đã chọn: ${productName}`);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePress(item)}>
      <View style={styles.item}>
        <Text style={styles.text}>{item}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <SectionList
        sections={groupedProducts}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
      <Button title="Quay lại FlatList" onPress={() => navigation.navigate('FlatList')} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
  },
});

export default SectionListScreen;
