import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Navbar from "./src/components/Navbar";
import Home from "./src/views/Home";
import Footer from "./src/components/Footer";
import MyProfile from "./src/views/MyProfile";
import BrowseTournaments from "./src/views/BrowseTournaments";
import CreateTournament from "./src/views/CreateTournament";
import UserTournaments from "./src/views/UserTournaments";
import AboutUs from "./src/views/AboutUs";
import ContactUs from "./src/views/ContactUs";
import Settings from "./src/views/Settings";
import Match from "./src/components/Match";
import Tournament from "./src/components/Tournament";


const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        
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
            <Stack.Screen name='MyProfile' component={MyProfile} options={{ headerShown: false }}/>
            <Stack.Screen
              name='BrowseTournaments'
              component={BrowseTournaments}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='CreateTournament'
              component={CreateTournament}
              options={{ headerShown: false }}
            />
            <Stack.Screen name='UserTournaments' component={UserTournaments} options={{ headerShown: false }}/>

            {/* Burger Menu Options */}
            <Stack.Screen name='AboutUs' component={AboutUs} />
            <Stack.Screen name='ContactUs' component={ContactUs} />
            <Stack.Screen name='Settings' component={Settings} />

            {/* For Testing */}
            <Stack.Screen name='Match' component={Match} />
            <Stack.Screen name='Tournament' component={Tournament} />

          </Stack.Navigator>
          <Footer styles={styles.footer}/>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
