import * as React from "react";
import { ImageBackground, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function BackButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Garden");
      }}
    >
      <Image
        style={{ width: 90, height: 42, marginLeft: 5 }}
        source={require("../../images/back.png")}
      />
    </TouchableOpacity>
  );
}
export default function Gifts({ navigation }) {
  return (
    <ImageBackground
      source={require("../../images/Shop/bg.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.backButton}>
        <BackButton />
      </View>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../images/Shop/gifts.png")}
          style={styles.itemsImage}
        >
          {/* <View style={styles.itemContainer}>
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
          </View> */}
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
  backButton: {
    marginTop: 106,
  },
  container: {
    alignItems: "center",
    marginTop: 50,
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
