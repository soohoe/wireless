import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView,  Dimensions, View, Text,StyleSheet, Image, } from "react-native";

function OrderPlacement({ navigation }) {
  const onPress = async () => {
    // Assuming `index` is defined elsewhere in your code
    if (index >= 2) {
      // Make sure `setOnboardFlag` is defined and works as expected
      await setOnboardFlag();
      navigation.push('LoginRegisterScreen'); // Check if 'Home' matches the actual route name
    }
  };
  const windowHeight = Dimensions.get("window").height;


  return (
    <View style={{ ...styles.container, minHeight: windowHeight }}>
    <View style={styles.topBar}>
    
    <Text style={styles.heading}>Order Placement</Text>
    <View style={{ width: 45 }}></View>
  </View>
  <View>
    <Image style={styles.photo} resizeMode="contain" source={require("../../assets/images/orderPlaced.png")} />
    <Text style={styles.text}> Your Order Is Placed!</Text>
    </View>
    
    <TouchableOpacity
              style={{
                backgroundColor: "#655DB0",
                borderRadius: 16,
                padding: 16,
              }}
              onPress={() => navigation.navigate('Home')}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontFamily: "Montserrat-SemiBold",
                }}
              >
                Back to Home
              </Text>
            </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
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
  text:{
    fontSize:30,
    textAlign:"center",
    margin: 50,
  }
});
export default OrderPlacement;