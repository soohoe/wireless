import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { getOnboardFlag } from "../services";
import { Home, Cart, ItemDetail, OnBoarding} from "../views";
import UserProfileScreen from "../views/UserProfileScreen"; // Update the path as needed
import OrderPlacement from "../views/OrderPlacement"; // Update the path as needed


import { setOnBoarded } from "../store/actions/flags";
import CustomDrawerContent from "../components/CustomDrawerContent";

const Stack = createSharedElementStackNavigator();

export default function MainContainer() {
  const dispatch = useDispatch();
  const Stack = createStackNavigator();

  const { onBoarded } = useSelector((state) => state.flagsState);

  useEffect(() => {
    (async () => {
      const flag = await getOnboardFlag();
      dispatch(setOnBoarded(flag === "DONE"));
    })();
  }, []);

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

  
  return (
    <NavigationContainer useLegacyImplementation>
      
      <Stack.Navigator
        headerMode="none"
        initialRouteName={onBoarded ? "Home" : "OnBoarding"}
      >
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Detail"
          component={ItemDetail}
          options={stackOptions}
        />
        <Stack.Screen name="OrderPlacement" component={OrderPlacement} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


