import * as React from "react";
import { ImageBackground, View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Pumpkin({ navigation }) {
  return (
    <ImageBackground
      source={require("../../images/Shop/bg.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <ImageBackground
          source={require("../../images/Shop/pumpkin.png")}
          style={styles.itemsImage}
        >
          <View style={styles.itemContainer}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("Pumpkin")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("Saw")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("Halo")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("Witch")}
            ></TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: 390,
    height: 900,
  },
  container: {
    alignItems: "center",
    marginTop: 180,
  },
  itemsImage: {
    width: 390,
    height: 610,
  },
  itemContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    // marginHorizontal: "auto",
    width: 390,
    marginTop: 50,
    marginLeft: 45,
  },
  item: {
    width: 140,
    height: 140,
    backgroundColor: "rgba(0,0,0,0.1)",
    // borderWidth: 1,
    marginRight: 30,
    marginBottom: 30,
  },
});
