import React from "react";
import { View, Text, StyleSheet } from "react-native";

function TournamentMatch({ matchData, pronosticData, tournamentData }) {
  const isTournamentActive =
    tournamentData.tournamentStatus !== "ongoing" &&
    tournamentData.tournamentStatus !== "ended";

  return (
    <View style={styles.container}>
      <View style={styles.teamContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.teamName}>{matchData.hostTeam}</Text>
        </View>

        <View style={styles.scoreSection}>
          <Text style={styles.score}>
            {matchData.hostTeamGoals} - {matchData.guestTeamGoals}
          </Text>
          <Text style={styles.matchMinute}>Minute: 45</Text>
        </View>

        <View style={styles.rightContainer}>
          <Text style={styles.teamName}>{matchData.guestTeam}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.1)",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  teamContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: {
    alignItems: "center",
    marginHorizontal: 20,
  },
  rightContainer: {
    alignItems: "center",
    marginHorizontal: 20,
  },
  teamName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  scoreSection: {
    alignItems: "center",
  },
  score: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  matchMinute: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default TournamentMatch;
