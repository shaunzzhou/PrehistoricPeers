import React, { useState } from "react";
import {
  ImageBackground,
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Switch,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SignUp({ navigation }) {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  return (
    <ImageBackground
      source={require("../images/SignUp/bg.png")}
      style={styles.backgroundImage}
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
            source={require("../images/SignUp/person.png")}
            style={styles.icon}
          />
          <TextInput
            style={styles.username}
            placeholder="Enter your username"
            placeholderTextColor="rgb(163, 133, 115)"
          />
        </View>

        <View style={styles.textContainer}>
          <Image
            source={require("../images/SignUp/at.png")}
            style={styles.icon}
          />
          <TextInput
            style={styles.text}
            placeholder="Enter your email"
            placeholderTextColor="rgb(163, 133, 115)"
          />
        </View>

        <View style={styles.textContainer}>
          <Image
            source={require("../images/SignUp/lock.png")}
            style={styles.lock}
          />
          <TextInput
            style={styles.text}
            placeholder="Enter your password"
            placeholderTextColor="rgb(163, 133, 115)"
          />
        </View>

        <View style={styles.textContainer}>
          <Image
            source={require("../images/SignUp/lock.png")}
            style={styles.lock}
          />
          <TextInput
            style={styles.text}
            placeholder="Verify your password"
            placeholderTextColor="rgb(163, 133, 115)"
          />
        </View>

        <View style={styles.textContainer}>
          <Image
            source={require("../images/SignUp/lock.png")}
            style={styles.lock}
          />
          <TextInput
            style={styles.text}
            placeholder="Department"
            placeholderTextColor="rgb(163, 133, 115)"
          />
        </View>

        <View style={styles.brownContainer}>
          <View style={styles.switchRow}>
            <Switch
              trackColor={{ false: "#D3D3D3", true: "#9CE490" }}
              thumbColor={isEnabled1 ? "white" : "white"}
              ios_backgroundColor="#D3D3D3"
              onValueChange={toggleSwitch1}
              value={isEnabled1}

            />
            <Text style={{color:'#F9EEDF', marginLeft: 5}}>
              I agree with {" "}
              <Text style={{ textDecorationLine: "underline" }}>
                Terms and {"\n"} Conditions
              </Text>
            </Text>
          </View>

          <View style={styles.switchRow}>
            <Switch
              trackColor={{ false: "#D3D3D3", true: "#9CE490" }}
              thumbColor={isEnabled2 ? "white" : "white"}
              ios_backgroundColor="#D3D3D3"
              onValueChange={toggleSwitch2}
              value={isEnabled2}
            />
            <Text style={{color:'#F9EEDF', lineHeight: 20, marginLeft: 5}}>I want to receive news and promotions</Text>
          </View>
          
          <View>
            <Text style={{color:'#F9EEDF', marginTop: 5}}>Already have an account? <Text style={{color:"#FFB7B7", textDecorationLine:'underline'}}>Log In</Text></Text>
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Garden")}
          >
            <Image
              style={styles.loginButton}
              source={require("../images/SignUp/signupbutton.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "center",
  },
  back: {
    width: 90,
    height: 42,
    marginTop: 50,
    marginLeft: 10,
  },
  usernameContainer: {
    width: 250,
    marginTop: 250,
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
  icon: {
    width: 20,
    height: 20,
  },
  username: {
    backgroundColor: "#F9EEDF",
    paddingLeft: 10,
    height: 25,
    width: 150,
    color: "rgb(163, 133, 115)",
  },
  textContainer: {
    width: 250,
    marginTop: 15,
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
  text: {
    backgroundColor: "#F9EEDF",
    paddingLeft: 10,
    height: 25,
    width: 150,
    color: "rgb(163, 133, 115)",
  },
  lock: {
    width: 20,
    height: 25,
  },

  loginButton: {
    marginTop: 20,
    width: 205,
    height: 73,
  },

  brownContainer: {
    width: 300,
    height: 170,
    borderRadius: 70,
    backgroundColor: "#A38573",
    justifyContent: "center",
    alignItems: "center",
    textAlign: 'center',
    marginTop: 30,
  },
  switchRow: {
    flexDirection: 'row',
    width: '75%',
    paddingBottom: 7,
  },
});
