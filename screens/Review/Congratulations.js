import * as React from "react";
import { ImageBackground, View, Text, StyleSheet, Image } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Congratulations({ navigation }) {
  return (
    <ImageBackground
      source={require("../../images/Review/Congratulations.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        
      <View style={styles.readLetter}>
            <TouchableOpacity
              style={styles.items}
              onPress={() => navigation.navigate("Garden")}
            ></TouchableOpacity>
          </View>
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
    buttonImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
    },
    readLetter: {
        width: 40,
        height: 40,
        backgroundColor: "rgba(0,0,0,0.1)",
        marginBottom: 100,
        marginLeft: 230,
        marginTop: -160,
    },
    sendLetter: {
        width: 120,
        height: 20,
        backgroundColor: "rgba(10,0,0,0.1)",
        marginBottom: 20,
        marginLeft: 120,
        marginTop: -90,
    },
  });
  