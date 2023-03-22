import React, { useState } from "react";
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
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AddChampionship from "../../../components/AddChampionship";
import { LinearGradient } from "expo-linear-gradient";

function CreateTournament() {
  const navigation = useNavigation();
  const [isEditable, setIsEditable] = useState(false);
  const [tournamentName, setTournamentName] = useState("Tournament Name");
  const [isPublic, setIsPublic] = useState(false);
  const [showAddChampionshipModal, setShowAddChampionshipModal] =
    useState(false);
  const [selectedChampionshipName, setSelectedChampionshipName] = useState("");

  const handleEditNamePress = () => {
    setIsEditable((oldValue) => !oldValue);
    
  };

  const handleAddChampionshipPress = () => {
    setShowAddChampionshipModal(true);
  };

  const handleAddChampionshipModalClose = (championshipName) => {
    setSelectedChampionshipName(championshipName);
    setShowAddChampionshipModal(false);
  };

  const [termsChecked, setTermsChecked] = useState(false);

  const handleSubmit = () => {
    // TODO: Implement submission logic here
    console.log("Tournament created!");
  };

  return (
    <LinearGradient
      colors={["#5BC0F8", "#86E5FF","#FFF3A1", ]}
      style={styles.container}
    >
        <Text style={styles.title}>Create a new Tournament</Text>
        <View style={styles.tournamentNameWrapper}>
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
              {isEditable ? "Save" : "Edit"}{" "}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tournamentNameWrapper}>
          {/* Use selectedChampionshipName or "Add championship" as the button title */}
          <Button
            title={selectedChampionshipName || "Add championship"}
            onPress={handleAddChampionshipPress}
          />
          <Switch
            value={isPublic}
            onValueChange={() => setIsPublic((oldState) => !oldState)}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isPublic ? "#f5dd4b" : "#f4f3f4"}
          />
          <Text style={styles.label}>{isPublic ? "Private" : "Public"}</Text>
        </View>

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
          onRequestClose={() => setShowAddChampionshipModal(false)}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.modalOverlay}>
            <TouchableOpacity
              style={styles.modalOverlayTouchable}
              onPress={() => setShowAddChampionshipModal(false)}
            />
            <View style={styles.modalWrapper}>
              <AddChampionship onClose={handleAddChampionshipModalClose} />
            </View>
          </View>
        </Modal>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {},
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
});

export default CreateTournament;
