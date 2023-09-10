import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet,Dimensions,Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";


const windowHeight = Dimensions.get("window").height;

const UserProfileScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the user's data from AsyncStorage when the component mounts
    const getUserData = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('username');
        setUsername(storedUsername);
      } catch (error) {
        // Handle AsyncStorage errors
        console.error('Error fetching user data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getUserData();
  }, []);

  const handleLogout = async () => {
    // Clear the user token and other user-related data from AsyncStorage
    try {
      await AsyncStorage.removeItem('userToken');
      await AsyncStorage.removeItem('username');
      navigation.navigate('LoginScreen'); // Navigate back to the login screen
    } catch (error) {
      // Handle AsyncStorage errors
      console.error('Error logging out:', error);
    }
  };

  if (isLoading) {
    // Loading screen or spinner while fetching user data
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (

    <View style={{ ...styles.container, minHeight: windowHeight }}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5
            style={{ margin: 12 }}
            name="chevron-left"
            color="#424242"
            size={24}
          />
        </TouchableOpacity>
        <Text style={styles.heading}>Profile</Text>
        <View style={{ width: 45 }}></View>
      </View>
      <Image style={styles.photo} resizeMode="contain" source={require("../../assets/images/profilePic.png")} />
      <View style={styles.profileContainer}>
      <Text style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  marginBottom: 20,
                  color: "#424242",
                  textAlign: "center",
                  fontFamily: "Montserrat-SemiBold",
                }}>Welcome, {username}</Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#655DB0",
          borderRadius: 16,
          padding: 16,
        }}
        onPress={handleLogout}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#FFFFFF",
            textAlign: "center",
            fontFamily: "Montserrat-SemiBold",
          }}
        >
          Logout
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 16,
    backgroundColor: "#F2F2F2",
  },
  topBar: {
    minWidth: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 24,
    color: "#424242",
    textAlign: "center",
    fontFamily: "Montserrat-SemiBold",
  },
  photo: {
    height: 150,
    marginTop: 50,
    maxWidth: "100%",
  },
});

export default UserProfileScreen;