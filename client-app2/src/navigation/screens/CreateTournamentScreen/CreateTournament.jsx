import React, { useState } from "react";
import Toast from 'react-native-toast-message';
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  Switch,
  Modal,
  Pressable,
  Dimensions,
  ScrollView,
  ToastAndroid
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AddChampionship from "../../../components/AddChampionship";
import { LinearGradient } from "expo-linear-gradient";
import { useAtom } from "jotai";
import { createTournamentState, userState } from "../../../../state/stateManagement";

function CreateTournament() {

  //USE AXIOSPRIVATE HOOK
  const axiosPrivate = useAxiosPrivate();

  const navigation = useNavigation();
  const [isEditable, setIsEditable] = useState(false);
  const [showAddChampionshipModal, setShowAddChampionshipModal] =
    useState(false);
  const [selectedChampionshipName, setSelectedChampionshipName] = useState("");
  const [tournamentType, setTournamentType] = useState("League");
  const [isPickerVisible, setIsPickerVisible] = useState(false);


    //ATOM state
  const [over18, setOver18] = useAtom(createTournamentState.over18);
  const [termsChecked, setTermsChecked] = useAtom(createTournamentState.termsChecked);
  const [pronosticFrequency, setPronosticFrequency] = useAtom(createTournamentState.pronosticFrquency);
  const [entryPrice, setEntryPrice] = useAtom(createTournamentState.entryPrice);
  const [isPaid, setIsPaid] = useAtom(createTournamentState.isPaid)
  const [isPublic, setIsPublic] = useAtom(createTournamentState.isPublic);
  const [tournamentName, setTournamentName] = useAtom(createTournamentState.tournamentName);
  const [selectedChampionship, setSelectedChampionship] = useAtom(createTournamentState.selectedChampionship);

  const [loggedUser] = useAtom(userState.loggedUser);
  


  const openPicker = () => {
    setIsPickerVisible(true);
  };

  const closePicker = () => {
    setIsPickerVisible(false);
  };

  const handlePickerValueChange = (value) => {
    setPronosticFrequency(value);
    closePicker();
  };

  const handleEditNamePress = () => {
    setIsEditable((oldValue) => !oldValue);
  };

  const handleAddChampionshipPress = () => {
    setShowAddChampionshipModal(true);
  };

  const handleChampionshipSelect = (championship) => {
    setSelectedChampionshipName(championship.name);
    setSelectedChampionship(championship);
    setShowAddChampionshipModal(false); // Close the modal after a championship is selected
  };

  const handleAddChampionshipModalClose = (championshipName) => {
    setSelectedChampionshipName(championshipName);
    setShowAddChampionshipModal(false);
  };

    const showToast = (message) => {
    Toast.show({
      type: "error",
      text1: 'Error',
      text2: message
    });
  };


  const handleSubmit = async () => {
    if (!termsChecked) {
      showToast("Please confirm terms and conditions");
      return;
    }
    console.log(over18)
     console.log(isPaid)
    if (isPaid && !over18) {
      showToast("Please confirm that you are over 18");
      return;
    }
    const body = {
      hostUserId: loggedUser.id,
      ChampionshipId: selectedChampionship.id,
      name: tournamentName,
      isPublic: isPublic,
      tournamentPrice: entryPrice,
      enumTournamentPronosticFrequency: pronosticFrequency,
    }
    try {
      const requset = await axiosPrivate.post("/api/tournament", body);
      console.log(requset);
      console.log(requset.data);
    } catch (error) {
      console.log(error);
    }

    // console.log("Tournament created!");
  };

  return (
    <LinearGradient
      colors={["#5BC0F8", "#86E5FF", "#FFF3A1"]}
      style={styles.container}
    >
      <ScrollView>
        <Text style={styles.title}>Create a new Tournament</Text>
        <View style={styles.tournamentNameContainer}>
          {!isEditable ? (
            <Text style={styles.tournamentName}>{tournamentName}</Text>
          ) : (
            <TextInput
              style={styles.tournamentNameInput}
              defaultValue={tournamentName}
              onChangeText={(text) => setTournamentName(text)}
            />
          )}
          <TouchableOpacity
            style={styles.tournamentWrapperRight}
            onPress={handleEditNamePress}
          >
            <Text style={styles.editButton}>
              {isEditable ? "Save" : "Edit"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tournamentNameWrapper}>
          {/* Use selectedChampionshipName or "Add championship" as the button title */}
          <Button
            title={
              selectedChampionshipName
                ? selectedChampionshipName
                : "Add championship"
            }
            onPress={handleAddChampionshipPress}
          />
          <Switch
            value={isPublic}
            onValueChange={() => setIsPublic((oldState) => !oldState)}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isPublic ? "#f5dd4b" : "#f4f3f4"}
          />
          <Text style={styles.label}>{isPublic ? "Private" : "Public" }</Text>
        </View>
        <View style={styles.tournamentNameWrapper}>
          <Text style={styles.label}>Tournament Type: </Text>
          <Switch
            value={isPaid}
            onValueChange={() => setIsPaid((oldState) => !oldState)}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isPaid ? "#f5dd4b" : "#f4f3f4"}
          />
          <Text style={styles.label}>{isPaid ? "Paid" : "Free"}</Text>
        </View>
        {isPaid && (
          <View style={styles.tournamentNameWrapper}>
            <TextInput
              style={styles.tournamentChargeInput}
              placeholder="Tournament Charge"
              keyboardType="numeric"
              onChangeText={(text) => setEntryPrice(text)}
            />
          </View>
        )}
        <View style={styles.tournamentNameWrapper}>
          <Text style={styles.label}>Pronostic Frequency: </Text>
          <TouchableOpacity onPress={openPicker}>
            <Text style={styles.pickerText}>
              {pronosticFrequency || "Select frequency"}
            </Text>
          </TouchableOpacity>
        </View>
        <Modal
          visible={isPickerVisible}
          onRequestClose={closePicker}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.modalPickerOverlay}>
            <TouchableOpacity
              style={styles.modalPickerOverlayTouchable}
              onPress={closePicker}
            />
            <View style={styles.modalPickerWrapper}>
              {tournamentType === "League" ? (
                <>
                  <Pressable onPress={() => handlePickerValueChange("weekly")}>
                    <Text style={styles.pickerItem}>Weekly</Text>
                  </Pressable>
                  <Pressable onPress={() => handlePickerValueChange("monthly")}>
                    <Text style={styles.pickerItem}>Monthly</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => handlePickerValueChange("half-season")}
                  >
                    <Text style={styles.pickerItem}>Half Season</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => handlePickerValueChange("full-season")}
                  >
                    <Text style={styles.pickerItem}>Full Season</Text>
                  </Pressable>
                </>
              ) : (
                <>
                  <Pressable onPress={() => handlePickerValueChange("daily")}>
                    <Text style={styles.pickerItem}>Daily</Text>
                  </Pressable>
                  <Pressable onPress={() => handlePickerValueChange("weekly")}>
                    <Text style={styles.pickerItem}>Weekly</Text>
                  </Pressable>
                  <Pressable
                    onPress={() => handlePickerValueChange("full-cup")}
                  >
                    <Text style={styles.pickerItem}>Full Cup</Text>
                  </Pressable>
                </>
              )}
            </View>
          </View>
        </Modal>

        <TouchableOpacity style={styles.createButton} onPress={handleSubmit}>
          <Text style={styles.createButtonText}>Create Tournament</Text>
        </TouchableOpacity>
        <View style={styles.termsContainer}>
          <TouchableOpacity onPress={() => setTermsChecked(!termsChecked)}>
            <View style={styles.checkButton}>
              {termsChecked && (
                <Image
                  source={require("../../../../assets/images/checked.png")}
                  style={styles.checkIcon}
                />
              )}
            </View>
          </TouchableOpacity>
          <Text style={styles.termsText}>
            I agree to the{" "}
            <Text style={styles.termsLink}>Terms and Conditions</Text>
          </Text>
        </View>
        {isPaid && (
          <View style={styles.termsContainer}>
            <Switch
              value={over18}
              onValueChange={(newValue) => setOver18(newValue)}
            />
            <Text style={styles.termsText}>I am over 18 years old</Text>
          </View>
        )}
        <Text style={styles.termsData}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar,
          enim et pellentesque ultricies, quam urna hendrerit lectus, nec
          elementum eros ante non urna. Nam bibendum massa quis augue faucibus,
          sit amet eleifend arcu sodales. Nulla facilisi. Integer sit amet
          scelerisque enim, eu ultrices ipsum. Sed vel magna eros.
        </Text>
        {/* Use animationType="slide" to make the modal slide up from the bottom */}
        <Modal
          visible={showAddChampionshipModal}
          onPress={() => handleChampionshipSelect(championship)}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.modalOverlay}>
            <TouchableOpacity
              style={styles.modalOverlayTouchable}
              onPress={() => setShowAddChampionshipModal(false)}
            />
            <View style={styles.modalWrapper}>
              <AddChampionship
                onClose={handleAddChampionshipModalClose}
                onChampionshipSelect={handleChampionshipSelect}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  tournamentNameWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  tournamentName: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
  },
  tournamentNameInput: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#F2F2F2",
  },
  tournamentWrapperRight: {
    marginLeft: "auto",
  },
  editButton: {
    color: "#007aff",
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  checkButton: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    width: 20,
    height: 20,
  },
  termsText: {
    fontSize: 16,
  },
  termsLink: {
    color: "blue",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  termsData: {
    marginTop: 20,
    fontSize: 14,
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingTop: 10,
  },
  createButton: {
    backgroundColor: "#007AFF",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  createButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.0)",
  },
  modalOverlayTouchable: {
    flex: 1,
  },
  modalWrapper: {
    backgroundColor: "white",
    height: Dimensions.get("window").height * 0.8,
  },
  tournamentChargeInput: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#F2F2F2",
  },
  scrollViewContainer: {
    paddingBottom: 25,
  },
  pickerText: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#F2F2F2",
    textAlign: "center",
  },
  modalPickerOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0, 0, 0.5)",
  },
  modalPickerOverlayTouchable: {
    flex: 1,
  },
  modalPickerWrapper: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  pickerItem: {
    fontSize: 18,
    paddingVertical: 10,
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  tournamentNameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default CreateTournament;
