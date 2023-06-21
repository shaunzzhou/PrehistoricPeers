import * as React from "react";
import { ImageBackground, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ChooseDinosaur({ navigation }) {
  return (
    <ImageBackground
      source={require("../images/ChooseDinosaur/bg.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Garden")}
        >
          <Image
            source={require("../images/ChooseDinosaur/enter.png")}
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
  },
  container: {
    alignItems: "center",
    marginTop: 600,
  },
  button: {
    width: 180,
    height: 100,
    // marginTop: 30,
  },
  buttonImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
