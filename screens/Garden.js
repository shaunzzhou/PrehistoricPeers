import React, { useState } from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Garden({ navigation }) {
  return (
    <ImageBackground
      source={require("../images/Garden/Garden.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.shopbutton}
          onPress={() => navigation.navigate("Shop")}
        ></TouchableOpacity>
        <TouchableOpacity
          style={styles.mailbutton}
          onPress={() => navigation.navigate("Mail")}
        ></TouchableOpacity>
        <TouchableOpacity
          style={styles.inventorybutton}
          onPress={() => navigation.navigate("Inventory")}
        ></TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "center",
  },
  shopbutton: {
    width: 40,
    height: 35,
    backgroundColor: "rgba(0,0,0,0.1)",
    marginBottom: 400,
    marginLeft: 175,
    marginTop: 35,
  },
  mailbutton: {
    width: 120,
    height: 100,
    backgroundColor: "rgba(0,0,0,0.1)",
    marginBottom: 15,
    marginRight: 300,
  },
  inventorybutton: {
    width: 120,
    height: 100,
    backgroundColor: "rgba(0,0,0,0.1)",
    marginLeft: 250,
  },
  container: {
    alignItems: "center",
  },
});