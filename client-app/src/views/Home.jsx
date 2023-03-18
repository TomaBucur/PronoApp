import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HomepageButton from "../components/HomepageButton";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.container}
    >
      <Text style={styles.appName}>App Name</Text>
      <View style={styles.buttonGroup}>
        <View style={styles.buttonRow}>
          <HomepageButton
            title="My Profile"
            onPress={() => navigation.navigate("MyProfile")}
          />
          <HomepageButton
            title="My Tournaments"
            onPress={() => navigation.navigate("UserTournaments")}
          />
        </View>
        <View style={styles.buttonRow}>
          <HomepageButton
            title="Participate to Tournament"
            onPress={() => navigation.navigate("ParticipateToTournament")}
          />
          <HomepageButton
            title="Create Tournament"
            onPress={() => navigation.navigate("CreateTournament")}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "7%",
  },
  appName: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#fff",
    marginBottom: 40,
  },
  buttonGroup: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 4,
    marginRight: 4,
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 10,
  },
});

export default Home;
