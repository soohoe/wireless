import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LoginRegisterScreen from './screens/LoginRegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ProductListingScreen from './screens/ProductListingScreen';
import ShoppingCartScreen from './screens/ShoppingCartScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginRegisterScreen} />
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Products" component={ProductListingScreen} />
        <Tab.Screen name="Cart" component={ShoppingCartScreen} />
        <Tab.Screen name="Profile" component={UserProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;