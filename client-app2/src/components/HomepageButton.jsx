import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const HomepageButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={0.7}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 3,
    padding: 15,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2.5,
    flex: 1,
  },
  text: {
    justifyContent:"center",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default HomepageButton;
