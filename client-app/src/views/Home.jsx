import React from "react";
import { View, Text, StyleSheet} from "react-native";
import HomepageButton from "../components/HomepageButton";


const Home = () => {
  return (
    <View style={styles.container}>    
      <Text style={styles.appName}>App Name</Text>
      <View style={styles.buttonGroup}>
        <View style={styles.buttonRow}>
          <HomepageButton title="New Tournament" onPress={() => console.log("New Tournament button pressed")} />
          <HomepageButton title="My Tournaments" onPress={() => console.log("My Tournaments button pressed")} />
        </View>
        <View style={styles.buttonRow}>
          <HomepageButton title="Participate in a Tournament" onPress={() => console.log("Participate in a Tournament button pressed")} />
          <HomepageButton title="My Profile" onPress={() => console.log("My Profile button pressed")} />
        </View>
      </View>
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
  },
  appName: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  buttonGroup: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 10,
    zIndex: 1
  },
});

export default Home;