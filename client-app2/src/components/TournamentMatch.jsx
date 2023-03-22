import React from "react";
import { View, Text, StyleSheet } from "react-native";

function TournamentMatch({ matchData, pronosticData, tournamentData }) {
  const isTournamentActive =
    tournamentData.tournamentStatus !== "ongoing" &&
    tournamentData.tournamentStatus !== "ended";

  return (
    <View style={styles.container}>
      <View style={styles.teamContainer}>
        <View style={[styles.leftContainer, { flex: 1 }]}>
          <Text style={[styles.teamName, { flexWrap: "wrap" }]}>
            {matchData.hostTeam}
          </Text>
        </View>

        <View style={[styles.scoreSection, { width: 100 }]}>
          <Text style={styles.score}>
            {matchData.hostTeamGoals} - {matchData.guestTeamGoals}
          </Text>
          <Text style={styles.matchMinute}>Minute: 45</Text>
        </View>

        <View style={[styles.rightContainer, { flex: 1 }]}>
          <Text style={[styles.teamName, { flexWrap: "wrap" }]}>
            {matchData.guestTeam}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  teamContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  leftContainer: {
    alignItems: "flex-end",
    paddingRight: 20,
    flex: 1,
  },
  rightContainer: {
    alignItems: "flex-start",
    paddingLeft: 20,
    flex: 1,
  },
  teamName: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  scoreSection: {
    alignItems: "center",
    justifyContent: "center",
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
