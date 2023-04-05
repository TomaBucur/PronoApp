import "react-native-gesture-handler";
import { StyleSheet, Platform, Text } from "react-native";
import Toast from "react-native-toast-message";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import Registration from "./src/navigation/screens/RegistrationScreen/Registration";
import { useAtom } from "jotai";
import { userState } from "./state/stateManagement";
import UserTournaments from "./src/navigation/screens/UserTournamentsScreen/UserTournaments";
import AboutUs from "./src/navigation/screens/AboutUsScreen/AboutUs";

const App = () => {
<<<<<<< HEAD
  const isUserLogged = false;
  return (
    <>
      {isUserLogged ? (
        <>
          <DrawerNavigator />
          <Toast />
        </>
      ) : (
        <Registration />
      )}
=======
  const [token] = useAtom(userState.token);

  return token ? (
    <>
      <DrawerNavigator />
      <Toast />
    </>
  ) : Platform.OS === "ios" ? (
    <Text
      style={{
        marginTop: "auto",
        marginBottom: "auto",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      Test
    </Text>
  ) : (
    <>
      <Registration />
>>>>>>> e14c95ef788a1968334629031ac5bb9c68991a92
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
