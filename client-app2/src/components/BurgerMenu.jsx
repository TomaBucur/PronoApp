import React, { useEffect, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";

const BurgerMenu = ({
  onLogOutPress,
  onSettingsPress,
  onAboutUsPress,
  onContactPress,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = useNavigation();

  const closeMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", closeMenu);

    return unsubscribe;
  }, [navigation, isMenuOpen]);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={closeMenu}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={toggleMenu} style={styles.burgerContainer}>
        <View style={styles.burgerLine} />
        <View style={styles.burgerLine} />
        <View style={styles.burgerLine} />
      </TouchableOpacity>
      {isMenuOpen && (
        <View style={styles.menuContainer}>
          <TouchableOpacity onPress={() => {
            closeMenu();
            onLogOutPress();
          }}>
            <Text style={[styles.menuText, styles.logoutText]}>Log Out</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            closeMenu();
            navigation.navigate("Settings");
          }}>
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            closeMenu();
            navigation.navigate("AboutUs");
          }}>
            <Text style={styles.menuText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            closeMenu();
            navigation.navigate("ContactUs");
          }}>
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
    zIndex: 2,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
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
    borderRadius: 5,
  },
  menuText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    zIndex: 4,
  },
  logoutText: {
    color: "red",
  },
});

export default BurgerMenu;
