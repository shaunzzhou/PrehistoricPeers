import * as React from "react";
import { ImageBackground, View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Mask({ navigation }) {
  return (
    <ImageBackground
      source={require("../../images/CreateDinosaur/Mask/bg.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <ImageBackground
          source={require("../../images/CreateDinosaur/Mask/items.png")}
          style={styles.itemsImage}
        >
          <View style={styles.itemContainer}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("Leaf")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("Flamingo")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("Knife")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("CrowHat")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("PaperHat")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("Mask")}
            ></TouchableOpacity>
          </View>
        </ImageBackground>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Garden")}
        >
          <Image
            source={require("../../images/CreateDinosaur/create.png")}
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
    width: 390,
    height: 760,
  },
  container: {
    alignItems: "center",
    marginTop: 380,
  },
  itemsImage: {
    width: 370,
    height: 250,
  },
  button: {
    width: 180,
    height: 100,
    alignItems: "center",
    marginTop: 10,
  },
  buttonImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  itemContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    // marginHorizontal: "auto",
    width: 190,
    marginTop: 13,
    marginLeft: 8,
  },
  item: {
    width: 70,
    height: 70,
    backgroundColor: "rgba(0,0,0,0.1)",
    // borderWidth: 1,
    marginRight: 3,
    marginBottom: 8,
  },
});
