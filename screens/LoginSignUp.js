import * as React from "react";
import { ImageBackground, View, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function LoginSignUp({ navigation }) {
  return (
      <ImageBackground 
      source={require("../images/Login:SignUp/bg.png")}
      style={styles.backgroundImage}>
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Image source={require("../images/Login:SignUp/login.png")} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Image source={require("../images/Login:SignUp/signup.png")} style={styles.image}/>
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
  button: {
    width: 180,
    height: 100,
    top: 250,
    alignItems: "center",
    
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  // button: {
  //   padding: 10,
  //   marginTop: 20,
  //   width: 200,
  //   backgroundColor: "#648839",
  //   borderRadius: 10,
  //   shadowColor: "#171717",
  //   shadowOffset: { width: -2, height: 4 },
  //   shadowOpacity: 0.15,
  //   shadowRadius: 3,
  //   borderWidth: 2,
  //   borderColor: "`rgba(0,0,0,0.4)`",
  //   justifyContent: "center",
  //   alignSelf: "center",
  //   marginBottom: 30,
  //   alignItems: "center",
  //   marginBottom: 30,
  // },
  // button_text: {
  //   fontSize: 16,
  //   lineHeight: 21,
  //   letterSpacing: 0.25,
  //   color: "white",
  // },
  // text: {
  //   fontWeight: "bold",
  //   fontSize: 60,
  //   marginBottom: 30,
  // },
  // logo: {
  //   width: 305.62,
  //   height: 370,
  //   marginBottom: 25,
  // },
});
