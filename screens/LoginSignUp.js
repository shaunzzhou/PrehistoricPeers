import * as React from "react";
import { ImageBackground, View, StyleSheet, Image } from "react-native";
import { ImageBackground, View, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function LoginSignUp({ navigation }) {
export default function LoginSignUp({ navigation }) {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../images/Login:SignUp/bg.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Image
            source={require("../images/Login:SignUp/login.png")}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Image
            source={require("../images/Login:SignUp/signup.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'center'
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 50,
  },
  button_text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
  },
  text: {
    fontWeight: "bold",
    fontSize: 60,
    marginBottom: 30,
  },
  logo: {
    width: 305.62,
    height: 370,
    marginBottom: 25,
  },
});
