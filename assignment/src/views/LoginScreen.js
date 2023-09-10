import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from "react-native-gesture-handler";


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Implement your login logic here, e.g., sending a request to a server
    try {
      // Assuming a successful login returns a user token
      const userToken = 'your_user_token';
      await AsyncStorage.setItem('userToken', userToken);
      navigation.navigate('Home'); // Navigate to the home screen
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#655DB0",
          borderRadius: 16,
          padding: 16,
          marginBottom:10,
        }}
        onPress={handleLogin}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#FFFFFF",
            textAlign: "center",
            fontFamily: "Montserrat-SemiBold",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#655DB0",
          borderRadius: 16,
          padding: 16,
          marginBottom:10,
        }}
        onPress={() => navigation.navigate('SignUpScreen')}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#FFFFFF",
            textAlign: "center",
            fontFamily: "Montserrat-SemiBold",
          }}
        >
          Signup
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;