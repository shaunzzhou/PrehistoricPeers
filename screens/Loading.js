import * as React from "react";
import { ImageBackground, View, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function LoginSignUp({ navigation }) {
  return (
      <ImageBackground 
      source={require("../images/Loading/bg.png")}
      style={styles.backgroundImage}>
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Garden")}
      >
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30,
  },
  button: {
    width: 180,
    height: 100,
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
    
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});