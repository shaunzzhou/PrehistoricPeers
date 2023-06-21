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
        
          <View style={styles.itemContainer}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("InventoryLeaf")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("InventoryFlamingo")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("InventoryKnife")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("InventoryPlague")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("InventoryPaperbag")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate("InventoryMask")}
            ></TouchableOpacity>
          </View>
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
  },
  container: {
    alignItems: "center",
    marginTop: 50,
  },
  itemsImage: {
    width: 375,
    height: 590,
  },
  itemContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    // marginHorizontal: "auto",
    width: 190,
    marginTop: 348,
    marginLeft: -140,
  },
  item: {
    width: 60,
    height: 60,
    // backgroundColor: "rgba(0,0,0,0.1)",
    // borderWidth: 1,
    marginRight: 7,
    marginBottom: 9,
  },
  applybutton: {
    alignItems: "center",
    height: 70,
    width: 170,
    bottom: -30,
    // backgroundColor: "rgba(0,0,0,0.1)",
  },
  buttonImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
