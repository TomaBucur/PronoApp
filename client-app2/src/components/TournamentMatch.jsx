import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";

function TournamentMatch({ match }) {
  const {
    hostTeam,
    guestTeam,
    hostTeamGoals,
    guestTeamGoals,
    hostTeamLogoUrl,
    guestTeamLogoUrl,
    date,
    stadium,
    city,
    pronosticHostTeamGoals,
    pronosticGuestTeamGoals,
  } = match;

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.teamsContainer}>
        <Image source={ hostTeamLogoUrl } style={styles.logo} />
        <Text style={styles.teamName}>{hostTeam}</Text>
        <Text style={styles.score}>{hostTeamGoals}</Text>
      </View>
      <View style={styles.versusContainer}>
        <TouchableOpacity onPress={showModal}>
          <Text style={styles.detailsButton}>
            Details
          </Text>
        </TouchableOpacity>
        <Text style={styles.versusText}>VS</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Image source={ guestTeamLogoUrl } style={styles.logo} />
        <Text style={styles.teamName}>{guestTeam}</Text>
        <Text style={styles.score}>{guestTeamGoals}</Text>
      </View>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Match details</Text>

            <Text style={styles.dateText}>
              Date: {date.toLocaleDateString()}
            </Text>
            <Text style={styles.stadiumText}>Stadium: {stadium}</Text>
            <Text style={styles.cityText}>City: {city}</Text>
            <TouchableOpacity onPress={hideModal}>
              <Text style={styles.modalCloseButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 340,
    height: 90,
  },
  detailsButton:{
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 2.5,
  },
  teamsContainer: {
    alignItems: "center",
    paddingHorizontal: 5,
    width: "40%",
  },
  logo: {
    resizeMode: "contain", //contain or strtch or cover or center
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  teamName: {
    fontWeight: "bold", 
    fontSize: 16,
    marginBottom: 5,
  },
  score: {
    fontSize: 14,
    color: "#555",
  },
  versusContainer: {
    alignItems: "center",
  },
  versusText: {
    paddingHorizontal: 10,
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 5,
  },
  dateText: {
    fontSize: 14,
    color: "#555",
  },
  stadiumText: {
    fontSize: 12,
    color: "#555",
  },
  cityText: {
    fontSize: 12,
    color: "#555",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  teamContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  teamNameModal: {
    fontWeight: "bold",
    fontSize: 16,
  },
  teamScoreModal: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#555",
  },
  pronosticContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  pronosticLabel: {
    fontSize: 14,
    marginRight: 5,
  },
  pronosticScore: {
    fontSize: 16,
    color: "#555",
  },
});

export default TournamentMatch;
