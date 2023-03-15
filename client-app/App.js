import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Navbar from "./src/views/Navbar";
import Home from "./src/views/Home";
import Footer from "./src/views/Footer";
import MyProfile from "./src/views/MyProfile";
import ParticipateToTournament from "./src/views/ParticipateToTournament";
import CreateTournament from "./src/views/CreateTournament";
import UserTournaments from "./src/views/UserTournaments";
import AboutUs from "./src/views/AboutUs";
import ContactUs from "./src/views/ContactUs";
import Settings from "./src/views/Settings";


const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.container}
        >
          <StatusBar backgroundColor='#fff' barStyle='dark-content' />
          <Navbar
            userName='User Name'
            style={{
              position: "relative",
              zIndex: 1,
            }}
          />
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
              name='Home'
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen name='MyProfile' component={MyProfile} />
            <Stack.Screen
              name='ParticipateToTournament'
              component={ParticipateToTournament}
            />
            <Stack.Screen
              name='CreateTournament'
              component={CreateTournament}
            />
            <Stack.Screen name='UserTournaments' component={UserTournaments} />
            <Stack.Screen name='AboutUs' component={AboutUs} />
            <Stack.Screen name='ContactUs' component={ContactUs} />
            <Stack.Screen name='Settings' component={Settings} />
          </Stack.Navigator>
          <Footer />
        </LinearGradient>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
