import { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthProvider';

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(email, password);
    navigation.navigate('Explorer');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput placeholder="Enter your email here!" style={styles.input} onChangeText={setEmail} />
      <TextInput placeholder="Enter your password here!" secureTextEntry style={styles.input} onChangeText={setPassword} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={{ color: 'white' }}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 100 },
  title: { fontSize: 30, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, marginBottom: 20, padding: 10, borderRadius: 5 },
  button: { backgroundColor: '#FFA500', padding: 15, borderRadius: 5, alignItems: 'center' },
});

export default LoginScreen;
