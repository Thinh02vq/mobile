import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

const insights = [
  { id: '1', title: 'Scan new', subtitle: 'Scanned 483', icon: 'scan-outline', bgColor: '#E8EAFE', image: require('./assets/pizza.png') },
  { id: '2', title: 'Counterfeits', subtitle: 'Counterfeited 32', icon: 'alert-circle-outline', bgColor: '#FCE8E8' },
  { id: '3', title: 'Success', subtitle: 'Checkouts 8', icon: 'checkmark-circle-outline', bgColor: '#E8FCE8' },
  { id: '4', title: 'Directory', subtitle: 'History 26', icon: 'calendar-outline', bgColor: '#E8F1FC' }
];

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello 👋</Text>
        <Text style={styles.username}>Christie Doe</Text>
        <Image source={require('./77845097_p3_master1200.jpg')} style={styles.avatar} />
      </View>

      {/* Your Insights */}
      <Text style={styles.sectionTitle}>Your Insights</Text>
      <FlatList
        data={insights}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[styles.insightCard, { backgroundColor: item.bgColor }]} 
            onPress={() => item.image && navigation.navigate('ScanScreen', { image: item.image })}
          > 
            <Ionicons name={item.icon} size={24} color="black" />
            <Text style={styles.insightTitle}>{item.title}</Text>
            <Text style={styles.insightSubtitle}>{item.subtitle}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    color: 'gray',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  insightCard: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 5,
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  insightSubtitle: {
    fontSize: 12,
    color: 'gray',
  },
  
});
export default HomeScreen;