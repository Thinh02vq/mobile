import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  { name: 'Pizza', image: require('../assets/pizza.png') },
  { name: 'Burgers', image: require('../assets/burger.png') },
  { name: 'Steak', image: require('../assets/steak.png') }
];

const popularItems = [
  { name: 'Food 1', price: '1$', origin: 'By Viet Nam', image: require('../assets/food1.png') },
  { name: 'Food 2', price: '3$', origin: 'By Viet Nam', image: require('../assets/food2.png') }
];

export default function ExplorerScreen() {
  return (
    <ScrollView style={{ flex: 1, padding: 10, backgroundColor: '#F5F5F5' }}>
      <TextInput
        style={{
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 10,
          marginBottom: 20,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 5
        }}
        placeholder='Search for meals or area'
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Top Categories</Text>
        <TouchableOpacity>
          <Ionicons name='filter' size={20} color='orange' />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item, index) => (
          <View key={index} style={{ alignItems: 'center', marginRight: 15 }}>
            <Image source={item.image} style={{ width: 80, height: 80, borderRadius: 50 }} />
            <Text>{item.name}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>Popular Items</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {popularItems.map((item, index) => (
          <View key={index} style={{ marginRight: 15, backgroundColor: 'white', padding: 10, borderRadius: 10 }}>
            <Image source={item.image} style={{ width: 100, height: 100, borderRadius: 10 }} />
            <Text>{item.name}</Text>
            <Text>{item.origin}</Text>
            <Text>{item.price}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}
