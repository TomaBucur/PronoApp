import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import getMockData from "./MockDataProvider";
import TournamentMatch from "./TournamentMatch";
import { LinearGradient } from "expo-linear-gradient";

function Tournament({ name, status, isUserParticipant }) {
  const statusColors = {
    open: "green",
    closed: "red",
    ongoing: "orange",
  };

  // Mock data for TournamentMatch components
  const matches = getMockData().matches;
  const tournamentData = getMockData().tournaments;

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
      <Text style={styles.tournamentName}>{name}</Text>
      <Text style={[styles.tournamentStatus, { color: statusColors[status] }]}>
        {status}
      </Text>
      {status === "open" && !isUserParticipant && (
        <TouchableOpacity style={styles.participateButton}>
          <Text style={styles.participateButtonText}>Participate</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.leaderboard}>Leaderboard</Text>
      <ScrollView
        contentContainerStyle={[styles.matchesList, { paddingBottom: 20 }]}
      >
        {matches.map((match) => (
          <TournamentMatch
            key={match.id}
            matchData={match}
            tournamentData={tournamentData}
          />
        ))}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tournamentName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
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
  participateButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  leaderboard: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  matchesList: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});

export default Tournament;
