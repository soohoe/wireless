import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createSharedElementStackNavigator,
  SharedElement,
} from "react-navigation-shared-element";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { getOnboardFlag } from "../services";
import { Home, Cart, ItemDetail, OnBoarding } from "../views";
import UserProfileScreen from "../views/UserProfileScreen";
import OrderPlacement from "../views/OrderPlacement";
import LoginScreen from "../views/LoginScreen";
import SignUpScreen from "../views/SignUpScreen";

import { setOnBoarded } from "../store/actions/flags";
import CustomDrawerContent from "../components/CustomDrawerContent";
import { StyleSheet } from "react-native";

const Stack = createSharedElementStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator({ onBoarded, userToken }) {
  return (
    <Drawer.Navigator initialRouteName={userToken ? "Home" : "LoginScreen"}>
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Profile" component={UserProfileScreen} />
    </Drawer.Navigator>
  );
}

const stackOptions = () => ({
  gestureEnabled: false,
  transitionSpec: {
    open: { animation: "timing", config: { duration: 400 } },
    close: { animation: "timing", config: { duration: 400 } },
  },
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress,
    },
  }),
});
export default function MainContainer() {
  const dispatch = useDispatch();

  const { onBoarded } = useSelector((state) => state.flagsState);

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const checkUserToken = async () => {
      try {
        const token = await AsyncStorage.getItem("userToken");
        if (token) {
          setUserToken(token);
        }
      } catch (error) {
        // Handle AsyncStorage errors
      } finally {
        setIsLoading(false);
      }
    };
    checkUserToken();
  }, []);

  useEffect(() => {
    (async () => {
      const flag = await getOnboardFlag();
      dispatch(setOnBoarded(flag === "DONE"));
    })();
  }, [dispatch]);


  if (isLoading) {
    // Loading screen
    return null;
  }

  return (
    <NavigationContainer>
      <DrawerNavigator onBoarded={onBoarded} userToken={userToken} />
    </NavigationContainer>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="reee" component={Home} options={{headerShown:false}} />
      <Stack.Screen
          name="Detail"
          component={ItemDetail}
          options={stackOptions,{headerShown:false}}
        />
      <Stack.Screen name="OrderPlacement" component={OrderPlacement} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}