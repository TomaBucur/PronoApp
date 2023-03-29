import { StyleSheet} from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import Toast from "react-native-toast-message";

const App = () => {
  return (
    <>
      <AppNavigator />
      <Toast />
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
