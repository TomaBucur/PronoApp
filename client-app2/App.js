import "react-native-gesture-handler";
import { StyleSheet, Platform, Text } from "react-native";
import Toast from "react-native-toast-message";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import Registration from "./src/navigation/screens/RegistrationScreen/Registration";
import { useAtom } from "jotai";
import { userState } from "./state/stateManagement";

const App = () => {
  const [token] = useAtom(userState.token);

  return token ? (
    <>
      <DrawerNavigator />
      <Toast />
    </>
  ) : Platform.OS === "j" ? (
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
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
