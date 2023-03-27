import React from "react";
import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/HomeScreen/Home";
import Profile from "./screens/ProfileScreen/Profile";
import CreateTournament from "./screens/CreateTournamentScreen/CreateTournament";
import AboutUs from "./screens/AboutUsScreen/AboutUs";
import ContactUs from "./screens/ContactUsScreen/ContactUs";
import Settings from "./screens/SettingsScreen/Settings";
import BrowseTournaments from "./screens/BrowseTournamentsScreens/BrowseTournaments";
import UserTournaments from "./screens/UserTournamentsScreen/UserTournaments";

import Tournament from "../components/Tournament";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Match from "../components/Match";
import Pronostic from "../components/Pronostic";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Navbar
        userName="User Name"
        style={{
          position: "relative",
          zIndex: 1,
        }}
      />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BrowseTournaments"
          component={BrowseTournaments}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateTournament"
          component={CreateTournament}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserTournaments"
          component={UserTournaments}
          options={{
            headerShown: false,
          }}
        />
        {/* Burger Menu Options */}
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="Settings" component={Settings} />

        {/* Other Components */}
        <Stack.Screen name="Match" component={Match} />
        <Stack.Screen name="Tournament" component={Tournament} />
        <Stack.Screen name="Pronostic" component={Pronostic} />
      </Stack.Navigator>
      <Footer styles={styles.footer} colors={['#0081C9', '#5BC0F8', '#86E5FF', '#FFC93C', '#0081C9']} />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default AppNavigator;
