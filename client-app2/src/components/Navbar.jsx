import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import BurgerMenu from "./BurgerMenu";

const Navbar = ({
  userName,
  onLogOutPress,
  onSettingsPress,
  onAboutUsPress,
  onContactPress,
}) => {

  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate("Home");
  };


  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={navigateToHome}>
          <Image
            source={require("../../assets/images/logo_placeholder.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{userName}</Text>
      </View>
      <View style={styles.rightContainer}>
        <BurgerMenu
          onLogOutPress={onLogOutPress}
          onSettingsPress={onSettingsPress}
          onAboutUsPress={onAboutUsPress}
          onContactPress={onContactPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#1f2937",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    zIndex: 2,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
  },
  rightContainer: {
    position: "relative",
    width: 50,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    opacity: 1.0,
  },
});

export default Navbar;
