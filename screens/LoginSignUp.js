import * as React from "react";
import { ImageBackground, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function LoginSignUp({ navigation }) {
  return (
      <ImageBackground 
      source={require("../images/LoginSignUp/bg.png")}
      style={styles.backgroundImage}>
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Image source={require("../images/LoginSignUp/login.png")} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Image source={require("../images/LoginSignUp/signup.png")} style={styles.image}/>
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
    
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});