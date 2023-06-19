import * as React from "react";
import { ImageBackground, View, Text, StyleSheet, Image} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function CreateDinosaur({ navigation }) {
  return (
    <ImageBackground 
        source={require("../images/Login/bg.png")}
        style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require("../images/ChooseDinosaur/dinoNugget.png")} style={styles.dino}/>
        <View style={styles.buttonContainer}></View>
          <TouchableOpacity style={styles.button}>
            <Image source={require("../images/ChooseDinosaur/left.png")} style={styles.image}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={require("../images/ChooseDinosaur/right.png")} style={styles.image}/>
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
    },
    buttonContainer: {
      flexDirection: 'row',
    },
    button: {
      padding: 10,
      marginHorizontal: 5,
      borderRadius: 5,
    },
    dino: {
      width: 150,
      height: 150,
      resizeMode: "contain",
      top: 175,
      alignItems: "center",
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
    },
  });
  