import * as React from "react";
import { ImageBackground, View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Inventory({ navigation }) {
  return (
    <ImageBackground
      source={require("../images/Inventory/bg.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image
          source={require("../images/Inventory/items.png")}
          style={styles.items}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Garden")}
        >
          <Image
            source={require("../images/Inventory/apply.png")}
            style={styles.buttonImage}
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
    top: -1,
  },
  container: {
    alignItems: "center",
    marginTop: 280,
  },
  items: {
    alignItems: "center",
    resizeMode: "contain",
    width: 350,
    height: 400,
  },
  button: {
    width: 180,
    height: 100,
    marginTop: -40,
  },
  buttonImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
