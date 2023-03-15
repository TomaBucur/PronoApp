import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet} from "react-native";
import HomepageButton from "../components/HomepageButton";


const Home = () => {

  const navigation = useNavigation();


  return (
    <View style={styles.container}>    
      <Text style={styles.appName}>App Name</Text>
      <View style={styles.buttonGroup}>
        <View style={styles.buttonRow}>
          <HomepageButton title="My Profile" 
            onPress={() => navigation.navigate("MyProfile")} />
          <HomepageButton title="My Tournaments" 
            onPress={() => navigation.navigate("UserTournaments")} />
        </View>
        <View style={styles.buttonRow}>
          <HomepageButton title="Participate to Tournament" 
            onPress={() => navigation.navigate("ParticipateToTournament")} />
          <HomepageButton title="Create Tournament" 
            onPress={() => navigation.navigate("CreateTournament")} />
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
  //  marginHorizontal: 100
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 10,
    zIndex: 1
  },
});

export default Home;