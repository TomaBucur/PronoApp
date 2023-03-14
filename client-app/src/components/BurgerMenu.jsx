import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";

const BurgerMenu = ({ onLogOutPress, onSettingsPress, 
                      onAboutUsPress, onContactPress }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.container}>
      
      <TouchableOpacity onPress={toggleMenu} style={styles.burgerContainer}>
        <View style={styles.burgerLine} />
        <View style={styles.burgerLine} />
        <View style={styles.burgerLine} />
      </TouchableOpacity>
      {isMenuOpen && (
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={onLogOutPress}>
            <Text style={styles.menuText}>Log Out</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onSettingsPress}>
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onAboutUsPress}>
            <Text style={styles.menuText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onContactPress}>
            <Text style={styles.menuText}>Contact</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    zIndex: 2
  },
  burgerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 1,
  },
  burgerLine: {
    height: 2.5,
    marginVertical: 3,
    backgroundColor: "#fff",
    marginBottom: 3,
    borderRadius: 1,
  },
  menuContainer: {
    position: "absolute",
    right: 0,
    top: 50,
    backgroundColor: "#fff",
    padding: 10,
    elevation: 5,
  },
  menuText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    zIndex: 4
  },
});

export default BurgerMenu;