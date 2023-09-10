import UserProfileScreen from "../views/UserProfileScreen";
import Cart from "../views/Cart";
import {createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
export default function DrawerContainer() {
    return (
      <NavigationContainer>
        <Drawer.Navigator drawerContent={(props)=> <CustomDrawerContent{...props}/>}>
        <Drawer.Screen name="UserProfleScreen" component={UserProfileScreen} />
        <Drawer.Screen name="Cart" component={Cart} options={stackOptions} />
      </Drawer.Navigator>

      </NavigationContainer>
    );
  }
  