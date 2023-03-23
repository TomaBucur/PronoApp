import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TournamentMatch({ match, tournamentData }) {
  const { team1, team2, score1, score2, winner, loser, date } = match;
  const { pronosticData } = tournamentData;

  return (
    <View style={styles.container}>
      <View style={styles.teamsContainer}>
        <Text style={styles.teamName}>{team1}</Text>
        <Text style={styles.score}>{score1}</Text>
      </View>
      <View style={styles.versusContainer}>
        <Text style={styles.versusText}>VS</Text>
        <Text style={styles.dateText}>{date.toLocaleDateString()}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teamName}>{team2}</Text>
        <Text style={styles.score}>{score2}</Text>
      </View>
      {winner && loser && (
        <View style={styles.resultContainer}>
          <Text style={styles.winnerText}>{winner} wins</Text>
          <Text style={styles.loserText}>{loser} loses</Text>
        </View>
      )}
      {pronosticData && (
        <View style={styles.pronosticContainer}>
          <Text style={styles.pronosticText}>Your Pronostic:</Text>
          <Text style={styles.pronosticScore}>{pronosticData[match.id]}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 5,
    paddingHorizontal: 80,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  teamsContainer: {
    alignItems: "center",
    flex: 1,
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
    flex: 1,
  },
  versusText: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  dateText: {
    fontSize: 14,
    color: "#555",
  },
  resultContainer: {
    alignItems: "center",
    flex: 1,
  },
  winnerText: {
    fontWeight: "bold",
    color: "green",
    marginBottom: 5,
  },
  loserText: {
    color: "red",
  },
  pronosticContainer: {
    alignItems: "center",
    flex: 1,
  },
  pronosticText: {
    fontWeight: "bold",
    color: "#555",
    marginBottom: 5,
  },
  pronosticScore: {
    fontSize: 14,
    color: "#555",
  },
});

export default TournamentMatch;
