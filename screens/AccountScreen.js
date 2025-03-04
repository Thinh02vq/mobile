import { View, Text, Button } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { StyleSheet } from 'react-native';
const AccountScreen = ({ navigation }) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.banner}></View>
      <View style={styles.profileContainer}>
        <Text style={styles.name}>Hung Nguyen</Text>
        <Text style={styles.job}>Mobile developer</Text>
        <Text style={styles.description}>
          I have above 5 years of experience in native mobile apps development, now I am learning React Native
        </Text>
      </View>
      <Button title="Sign Out" onPress={() => {
        logout();
        navigation.navigate('Login');
      }} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  banner: {
    height: 200,
    backgroundColor: '#00aaff',
  },
  profileContainer: {
    marginTop: -50,
    alignItems: 'center',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  job: {
    color: '#00aaff',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    color: '#666',
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});


export default AccountScreen;
