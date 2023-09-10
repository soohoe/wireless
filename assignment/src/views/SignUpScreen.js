import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from "react-native-gesture-handler";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState(''); // State to store the entered username
  const [error, setError] = useState('');

  const handleSignup = async () => {
    if (!email || !password || !confirmPassword || !username) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Implement your signup logic here, e.g., sending a request to a server
    try {
      // Assuming a successful signup returns a user token
      const userToken = 'your_user_token';

      // Store the username in AsyncStorage
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('userToken', userToken);

      navigation.navigate('Home'); // Navigate to the home screen
    } catch (error) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Username" 
        value={username}
        onChangeText={(text) => setUsername(text)} 
      />
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry
      />
      
      <TouchableOpacity
        style={{
          backgroundColor: "#655DB0",
          borderRadius: 16,
          padding: 16,
          marginBottom:10,
        }}
        onPress={handleSignup}
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

export default SignUpScreen;