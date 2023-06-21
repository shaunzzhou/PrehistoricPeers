import * as React from "react";
import { ImageBackground, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function InventoryFlamingo({ navigation }) {
  return (
    <ImageBackground
      source={require("../../images/Inventory/inventoryflamingo.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>

        <TouchableOpacity
          style={styles.applybutton}
          onPress={() => navigation.navigate("Garden")}
        >
          <Image
            source={require("../../images/Inventory/apply.png")}
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
  applybutton: {
    alignItems: "center",
    position: "absolute",
    height: 100,
    width: 100,
    bottom: 20,
  },
  buttonImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
