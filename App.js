import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import LoginSignUp from "./screens/LoginSignUp";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Flamingo from "./screens/CreateDinosaur/Flamingo";
import CrowHat from "./screens/CreateDinosaur/CrowHat";
import Mask from "./screens/CreateDinosaur/Mask";
import Leaf from "./screens/CreateDinosaur/Leaf";
import Knife from "./screens/CreateDinosaur/Knife";
import PaperHat from "./screens/CreateDinosaur/PaperHat";
import ChooseDinosaur from "./screens/ChooseDinosaur";
import Garden from "./screens/Garden";
import Pumpkin from "./screens/Shop/Pumpkin";
import Saw from "./screens/Shop/Saw";
import Halo from "./screens/Shop/Halo";
import Witch from "./screens/Shop/Witch";
import Gifts from "./screens/Shop/Gifts";
import Inventory from "./screens/Inventory";
import Loading from  "./screens/Loading";
import { useFonts } from "expo-font";

function BackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Image
        style={{ width: 90, height: 42, marginLeft: 5 }}
        source={require("./images/back.png")}
      />
    </TouchableOpacity>
  );
}

function BackCreateDinosaur() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("SignUp");
      }}
    >
      <Image
        style={{ width: 90, height: 42, marginLeft: 5 }}
        source={require("./images/back.png")}
      />
    </TouchableOpacity>
  );
}
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        animationEnabled: false,
        headerLeft: () => <BackButton />,
        headerStyle: {
          backgroundColor: '#BCD9E0',
        },
        headerTintColor: '#BCD9E0',
        cardStyle: {
          backgroundColor: '#BCD9E0'
        }
      }}
    >
      <Stack.Screen
        name="LoginSignUp"
        component={LoginSignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Flamingo" component={Flamingo} options={{headerLeft: () => <BackCreateDinosaur/>}}/>
      <Stack.Screen name="CrowHat" component={CrowHat} options={{headerLeft: () => <BackCreateDinosaur/>}}/>
      <Stack.Screen name="Mask" component={Mask} options={{headerLeft: () => <BackCreateDinosaur/>}}/>
      <Stack.Screen name="Leaf" component={Leaf} options={{headerLeft: () => <BackCreateDinosaur/>}}/>
      <Stack.Screen name="Knife" component={Knife}options={{headerLeft: () => <BackCreateDinosaur/>}} />
      <Stack.Screen name="PaperHat" component={PaperHat} options={{headerLeft: () => <BackCreateDinosaur/>}}/>
      <Stack.Screen name="ChooseDinosaur" component={ChooseDinosaur} />
      <Stack.Screen name="Loading" component={Loading} options={{headerShown: false}}/>
      <Stack.Screen name="Garden" component={Garden} options={{headerShown: false}}/>
      <Stack.Screen name="Pumpkin" component={Pumpkin} options={{headerShown: false}}/>
      <Stack.Screen name="Saw" component={Saw} options={{headerShown: false}}/>
      <Stack.Screen name="Halo" component={Halo} options={{headerShown: false}}/>
      <Stack.Screen name="Witch" component={Witch} options={{headerShown: false}}/>
      <Stack.Screen name="Gifts" component={Gifts} options={{headerShown: false}}/>
      <Stack.Screen name="Inventory" component={Inventory} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'Dekko': require('./assets/fonts/Dekko.ttf')
  })
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
