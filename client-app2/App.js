import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import Toast from "react-native-toast-message";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import Registration from "./src/navigation/screens/RegistrationScreen/Registration";

const App = () => {
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
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
