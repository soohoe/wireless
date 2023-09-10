import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView,  Dimensions, View, Text,StyleSheet, } from "react-native";

function UserProfileScreen({ navigation }) {
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
});
export default UserProfileScreen;