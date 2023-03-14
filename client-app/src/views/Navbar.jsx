import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BurgerMenu from "../components/BurgerMenu";

const Navbar = ({ userName, onLogOutPress, onSettingsPress, onAboutUsPress, onContactPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
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
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "bold",
    
    
  },
  rightContainer: {
    position: 'relative',
    width: 50,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    opacity: 1.0,
  },
});

export default Navbar;