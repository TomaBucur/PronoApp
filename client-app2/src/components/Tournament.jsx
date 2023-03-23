import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import TournamentMatch from "./TournamentMatch";
import { LinearGradient } from "expo-linear-gradient";

function Tournament({ route }) {
  const { tournament } = route.params;
  const [showModal, setShowModal] = useState(false);
  const statusColors = {
    open: "green",
    closed: "red",
    ongoing: "orange",
  };

  return (
    <LinearGradient
      colors={[
        "#5BC0F8",
        "#86E5FF",
        "#FFF3A1",
        "#FFDE6F",
        "#69D4B4",
        "#A1F4D6",
      ]}
      style={styles.container}
    >
      <Text style={styles.tournamentName}>{tournament.name}</Text>
      <Text
        style={[
          styles.tournamentStatus,
          { color: statusColors[tournament.status] },
        ]}
      >
        {tournament.status}
      </Text>
      {tournament.status === "open" && !tournament.isUserParticipant && (
        <TouchableOpacity style={styles.participateButton}>
          <Text style={styles.participateButtonText}>Participate</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.matches}>Championship Matches</Text>

      {/* List of matches from the tournament */}
      <ScrollView contentContainerStyle={styles.matchesList}>
        {tournament.matches ? (
          tournament.matches.map((match) => (
            <TournamentMatch
              key={match.id}
              match={match}
              tournamentData={tournament}
            />
          ))
        ) : (
          <View style={styles.emptyView}>
            <Text style={styles.emptyViewText}>
              No matches found for this tournament
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Modal with more infos about the Tournament */}
      <TouchableOpacity
        style={styles.moreInfoButton}
        onPress={() => setShowModal(true)}
      >
        <Text style={styles.moreInfoButtonText}>More Info</Text>
      </TouchableOpacity>
      <Modal visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Additional Tournament Info:</Text>
          <Text>Tournament Name: {tournament.name}</Text>
          <Text>Starting Date: {tournament.startingDate.toDateString()}</Text>
          <Text>Ending Date: {tournament.endingDate.toDateString()}</Text>
          <Text>Tournament Status: {tournament.status}</Text>
          <Text>Championship Name: {tournament.championshipName}</Text>
          <Text>Signed Players: {tournament.signedPlayers}</Text>
          <Text>User Position: {tournament.userPosition}</Text>
          <Text>Total Positions: {tournament.totalPositions}</Text>
          <Text>
            Users Signed In Tournament: {tournament.usersSignedInTournament}
          </Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setShowModal(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
  tournamentName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  tournamentStatus: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  participateButton: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  participatebuttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  matches: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  matchesList: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  moreInfoButton: {
    backgroundColor: "#69D4B4",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  moreInfoButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Tournament;
