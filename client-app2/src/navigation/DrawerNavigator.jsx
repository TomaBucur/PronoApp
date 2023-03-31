// import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/HomeScreen/Home";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./screens/ProfileScreen/Profile";
import BrowseTournaments from "./screens/BrowseTournamentsScreens/BrowseTournaments";
import CreateTournament from "./screens/CreateTournamentScreen/CreateTournament";
import UserTournaments from "./screens/UserTournamentsScreen/UserTournaments";
import AboutUs from "./screens/AboutUsScreen/AboutUs";
import ContactUs from "./screens/ContactUsScreen/ContactUs";
import Settings from "./screens/SettingsScreen/Settings";
import Match from "../components/Match";
import Tournament from "../components/Tournament";
import Footer from "../components/Footer";
import Registration from "./screens/RegistrationScreen/Registration";

export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ drawerItemStyle: { height: 0 } }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{ drawerItemStyle: { height: 0 } }}
        />
        <Drawer.Screen
          name="BrowseTournaments"
          component={BrowseTournaments}
          options={{ drawerItemStyle: { height: 0 } }}
        />
        <Drawer.Screen
          name="CreateTournament"
          component={CreateTournament}
          options={{ drawerItemStyle: { height: 0 } }}
        />
        <Drawer.Screen
          name="UserTournaments"
          component={UserTournaments}
          options={{ drawerItemStyle: { height: 0 } }}
        />
        <Drawer.Screen name="AboutUs" component={AboutUs} />
        <Drawer.Screen name="ContactUs" component={ContactUs} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen
          name="Match"
          component={Match}
          options={{ drawerItemStyle: { height: 0 } }}
        />
        <Drawer.Screen
          name="Tournament"
          component={Tournament}
          options={{ drawerItemStyle: { height: 0 } }}
        />
        <Drawer.Screen
          name="Registration"
          component={Registration}
        />
      </Drawer.Navigator>
      <Footer colors={['#0081C9', '#5BC0F8', '#86E5FF', '#FFC93C', '#0081C9']} />
    </NavigationContainer>
  );
}
