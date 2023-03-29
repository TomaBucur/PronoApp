import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function MatchHighlight({ matchData, pronosticData, tournamentData }) {
  const isTournamentActive =
    tournamentData.tournamentStatus !== "ongoing" && tournamentData.tournamentStatus !== "ended";

  return (
    <View
      style={styles.container}
    >
      <View style={styles.teamContainer}>
        <View style={styles.leftContainer}>
          <Text style={styles.teamName}>{matchData.hostTeam}</Text>
        </View>

        <View style={styles.scoreSection}>
          <Text style={
            (pronosticData.hostTeamGoalsPronostic == matchData.hostTeamGoals && pronosticData.guestTeamGoalsPronostic == matchData.guestTeamGoals)
              ?
              styles.correctPronostic :
              (pronosticData.hostTeamGoalsPronostic - pronosticData.guestTeamGoalsPronostic == matchData.hostTeamGoals - matchData.guestTeamGoals) ?
                styles.correctGoalsDifference :
                styles.wrongPronostic
          }
          >
            {matchData.hostTeamGoals} - {matchData.guestTeamGoals}
          </Text>
          <Text style={styles.matchMinute}>Minute: 45</Text>
          <TouchableOpacity
            style={[
              styles.pronosticButton,
              isTournamentActive ? styles.editablePronostic : {},
            ]}
            disabled={!isTournamentActive}
          >
            <Text style={styles.pronostic}>
              {pronosticData.hostTeamGoalsPronostic} -{" "}
              {pronosticData.guestTeamGoalsPronostic}
            </Text>
          </TouchableOpacity>
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
  correctPronostic: {
    backgroundColor: 'green',
    padding: 2,
    borderRadius: 10,
    overflow: "hidden",
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  wrongPronostic: {
    backgroundColor: 'red',
    padding: 2,
    borderRadius: 10,
    overflow: "hidden",
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  correctGoalsDifference: {
    backgroundColor: 'yellow',
    padding: 2,
    borderRadius: 10,
    overflow: "hidden",
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  pronosticButton: {
    marginHorizontal: 10,
  },
  editablePronostic: {
    backgroundColor: "rgba(0, 123, 255, 0.1)",
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  pronostic: {
    fontSize: 18,
    fontWeight: "bold",
    color: "gray",
  },
  matchMinute: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default MatchHighlight;
