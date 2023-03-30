import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import Toast from "react-native-toast-message";
import DrawerNavigator from "./src/navigation/DrawerNavigator";

const App = () => {
  return (
    <>
      <DrawerNavigator />
      <Toast />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
