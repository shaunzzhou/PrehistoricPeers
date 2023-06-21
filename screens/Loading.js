import * as React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Lottie from "lottie-react-native";

export default function Loading({ navigation }) {
  return (
    <ImageBackground
      source={require("../images/Loading/bg.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.animation}>
        <Lottie
          source={require("../assets/animation.json")}
          autoPlay
          loop
          style={{ height: 350 }}
        />
      </View>

      {/* <View style={styles.progressBar}>
        <Lottie
          source={require("../assets/loading.json")}
          autoPlay
          loop
          style={{ height: 30 }}
        />
      </View> */}
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Garden")}
        >
        <Lottie
          source={require("../assets/loading.json")}
          autoPlay
          loop
          style={{ height: 30 }}
        />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 30,
    marginTop: 10,
  },
  animation: {
    marginTop: 300,
    marginLeft: 40,
  },

  progressBar: {
    marginTop: 30,
    alignItems: "center",
  },
  button: {
    width: 180,
    height: 100,
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
    marginBottom: 50,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
