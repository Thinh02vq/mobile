/*import React from 'react'; //Bài tập 02.2
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import {StatusBar } from 'react-native';
const notifications = [
  {
    id: '1',
    title: 'Bước 1: Xác định nhu cầu khách hàng',
    description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    time: '20/08/2020, 06:00',
    icon: 'check-circle', // Giả sử bạn dùng thư viện icon
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    time: '20/08/2020, 06:00',
    icon: 'users',
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    description: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    time: '20/08/2020, 06:00',
    icon: 'users',
  },
  {
    id: '4',
    title: 'Khách hàng được thêm bị trùng',
    description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống: Vui lòng thêm khách hàng.',
    time: '20/08/2020, 06:00',
    icon: 'users',
  },
  {
    id: '5',
    title: 'Công việc sắp đến hạn trong hôm nay',
    description: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    time: '20/08/2020, 06:00',
    icon: 'check-circle',
  },
  {
    id: '6',
    title: 'Công việc đã quá hạn',
    description: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
    time: '20/08/2020, 06:00',
    icon: 'check-circle',
  },
];

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{item.icon === 'check-circle' ? '✔️' : '👥'}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <><View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Thông báo</Text>
      </View>
    </View><></>
    <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.container} /></>
      
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  container: {
    flex: 0,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default App;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.text}>Hello, world</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Kích thước container chiếm toàn bộ màn hình
    justifyContent: 'center', // Canh giữa hình vuông theo chiều dọc
    alignItems: 'center', // Canh giữa hình vuông theo chiều ngang
    backgroundColor: '#f5f5f5', // Màu nền sáng cho toàn bộ màn hình
  },
  square: {
    width: 350, // Chiều rộng hình vuông
    height: 350, // Chiều cao hình vuông (bằng chiều rộng để thành hình vuông)
    backgroundColor: '#4CAF50', // Màu nền xanh lá cây cho hình vuông
    justifyContent: 'center', // Canh giữa chữ bên trong theo chiều dọc
    alignItems: 'center', // Canh giữa chữ bên trong theo chiều ngang
    borderRadius: 8, // Bo góc hình vuông (tùy chọn, không bắt buộc)
  },
  text: {
    color: '#fff', // Màu chữ trắng
    fontSize: 16, // Kích thước chữ
    fontWeight: 'bold', // Định dạng chữ in đậm
  },
});

export default App;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlatListScreen from './screens/Flatlist';
import SectionListScreen from './screens/Sectionlist';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FlatList">
        <Stack.Screen name="FlatList" component={FlatListScreen} options={{ title: 'Danh sách sản phẩm' }} />
        <Stack.Screen name="SectionList" component={SectionListScreen} options={{ title: 'Nhóm sản phẩm' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;*/
import React, { useState } from "react";
import { View, Button, StyleSheet, Dimensions } from "react-native";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.buttonContainer}>
        <Button title="Green" color="#28A745" onPress={() => setBackgroundColor("#28A745")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Blue" color="#0000FF" onPress={() => setBackgroundColor("#0000FF")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Brown" color="#8B4513" onPress={() => setBackgroundColor("#8B4513")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Yellow" color="#FFFF00" onPress={() => setBackgroundColor("#FFFF00")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Red" color="#FF5733" onPress={() => setBackgroundColor("#FF5733")} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Black" color="#000000" onPress={() => setBackgroundColor("#000000")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: Dimensions.get("window").width, // Chiều rộng bằng màn hình
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10, // Khoảng cách giữa các nút
  },
});

export default App;