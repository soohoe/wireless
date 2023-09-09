import React from 'react';
import { Text, View } from 'react-native';
import LoginRegisterScreen from './LoginRegisterScreen';

function UserProfileScreen({ navigation }) {
  const onPress = async () => {
    // Assuming `index` is defined elsewhere in your code
    if (index >= 2) {
      // Make sure `setOnboardFlag` is defined and works as expected
      await setOnboardFlag();
      navigation.push('LoginRegisterScreen'); // Check if 'Home' matches the actual route name
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 50 }}>Profile</Text>
      {/* You can add a button or trigger for the onPress function */}
    </View>
  );
}

export default UserProfileScreen;