import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Navbar from "./src/views/Navbar";
import Home from "./src/views/Home";
import { LinearGradient } from "expo-linear-gradient";


const App = () => {
  return (
    <LinearGradient 
    colors={['#4c669f', '#3b5998', '#192f6a']}
    style={styles.container}>
      <Navbar userName="User Name"
      style={{
      position: 'relative',
      zIndex: 1
  }}/>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Home />
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 ToBu & RoChi </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
    flex: 1,
  },
  footer: {
    height: 30,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerText: {
    color: "light-blue",
    fontSize: 12,
  },
});

export default App;