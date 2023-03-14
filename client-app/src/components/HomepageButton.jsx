import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const HomepageButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.container}>{title}</Text>
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccccff",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 5,
    width: 180,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    flex: 1,
  },
});

export default HomepageButton;