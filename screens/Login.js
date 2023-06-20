import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  Switch,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Login({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ImageBackground
      style={styles.background}
      source={require("../images/Login/bg.png")}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <View style={styles.usernameContainer}>
          <Image
            style={styles.personIcon}
            source={require("../images/Login/person.png")}
          />
          <TextInput
            style={styles.username}
            placeholder="Username"
            placeholderTextColor="rgb(163, 133, 115)"
          />
        </View>

        <View style={styles.passwordContainer}>
          <Image
            style={styles.lockIcon}
            source={require("../images/Login/lock.png")}
          />
          <TextInput
            style={styles.password}
            placeholder="Password"
            placeholderTextColor="rgb(163, 133, 115)"
          />
        </View>

        <View style={styles.forgotContainer}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </View>

        <View style={styles.rememberContainer}>
          <Switch
            trackColor={{ false: "#D3D3D3", true: "#9CE490" }}
            thumbColor={isEnabled ? "white" : "white"}
            ios_backgroundColor="#D3D3D3"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />

          <Text style={styles.rememberText}>Remember me</Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ChooseDinosaur")}
          >
            <Image
              style={styles.loginButton}
              source={require("../images/Login/login.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  back: {
    width: 90,
    height: 42,
    marginTop: 50,
    marginLeft: 10,
  },
  usernameContainer: {
    width: 250,
    marginTop: 350,
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#F9EEDF",
    padding: 25,
    width: 220,
    borderWidth: 2,
    borderColor: "rgb(163, 133, 115)",
    borderRadius: 50,
    color: "rgb(163, 133, 115)",
  },
  personIcon: {
    width: 20,
    height: 20,
  },
  username: {
    backgroundColor: "#F9EEDF",
    paddingLeft: 10,
    height: 25,
    width: 150,
    color: "rgb(163, 133, 115)",
    textAlign: "center",
    fontFamily: "Dekko",
    fontSize: 28,
  },
  passwordContainer: {
    width: 250,
    marginTop: 30,
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#F9EEDF",
    padding: 25,
    width: 220,
    borderWidth: 2,
    borderColor: "rgb(163, 133, 115)",
    borderRadius: 50,
    color: "rgb(163, 133, 115)",
  },
  lockIcon: {
    width: 20,
    height: 25,
  },
  password: {
    backgroundColor: "#F9EEDF",
    paddingLeft: 10,
    height: 25,
    width: 150,
    color: "rgb(163, 133, 115)",
    textAlign: "center",
    fontFamily: "Dekko",
    fontSize: 28,
  },
  rememberContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rememberText: {
    color: "#F9EEDF",
    fontSize: 24,
    marginLeft: 5,
    fontFamily: 'Dekko',
  },
  forgotContainer: {
    marginTop: 30,
    borderBottomWidth: 2,
    borderColor: "#F9EEDF",
    
  },
  forgotText: {
    color: "#F9EEDF",
    fontSize: 26,
    // textDecorationLine: "underline",
    marginLeft: 5,
    fontFamily: 'Dekko',
  },
  loginButton: {
    marginTop: 20,
    width: 205,
    height: 73,
  },
});
