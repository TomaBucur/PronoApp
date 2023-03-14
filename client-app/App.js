import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Navbar from "./src/views/Navbar";
import Home from "./src/views/Home";
import { LinearGradient } from "expo-linear-gradient";
import Footer from "./src/views/Footer";


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
      <Footer />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
    flex: 1,
  },
});

export default App;