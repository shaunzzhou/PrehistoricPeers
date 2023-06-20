import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LoginSignUp from "./screens/LoginSignUp";
import Login from "./screens/Login";
import CustomizeScreen from "./screens/CustomizeScreen";
import CommitmentScreenStack1 from "./screens/CommitmentScreenStack1";
import IndividualCommitmentScreen from "./screens/IndividualCommitmentScreen";
import GeneratingScreen from "./screens/GeneratingScreen";
import CalendarScreen from "./screens/CalendarScreen";
import SignUp from "./screens/SignUp";
import Flamingo from "./screens/CreateDinosaur/Flamingo";
import CrowHat from "./screens/CreateDinosaur/CrowHat";
import Mask from "./screens/CreateDinosaur/Mask";
import Leaf from "./screens/CreateDinosaur/Leaf";
import Knife from "./screens/CreateDinosaur/Knife";
import PaperHat from "./screens/CreateDinosaur/PaperHat";
import ChooseDinosaur from "./screens/ChooseDinosaur";
import Garden from "./screens/Garden";
import { useFonts, Dekko_400Regular } from "@expo-google-fonts/dekko";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false, headerShown: false }}>
      <Stack.Screen
        name="LoginSignUp"
        component={LoginSignUp}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Flamingo"
        component={Flamingo}
      />
      <Stack.Screen
        name="CrowHat"
        component={CrowHat}
      />
      <Stack.Screen
        name="Mask"
        component={Mask}
      />
      <Stack.Screen
        name="Leaf"
        component={Leaf}
      />
      <Stack.Screen
        name="Knife"
        component={Knife}
      />
      <Stack.Screen
        name="PaperHat"
        component={PaperHat}
      />
      <Stack.Screen
        name="ChooseDinosaur"
        component={ChooseDinosaur}
      />
      <Stack.Screen
        name="Garden"
        component={Garden}
      />
      <Stack.Screen name="Customize" component={CustomizeScreen} />
      <Stack.Screen name="Get Commitments" component={CommitmentScreenStack1} />
      <Stack.Screen
        name="Individual Commitments"
        component={IndividualCommitmentScreen}
      />
      <Stack.Screen
        name="Generating Schedule..."
        component={GeneratingScreen}
      />
      <Stack.Screen name="Calendar" component={CalendarScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
