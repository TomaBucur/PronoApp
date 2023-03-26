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
    backgroundColor: 'rgba(255, 215, 0, 0.7)',
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
    paddingVertical: 0
  },
});

export default Tournament;
