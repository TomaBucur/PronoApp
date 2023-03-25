import React from "react";
import {
  TouchableOpacity,
  Text,
  ScrollView,
  View,
  StyleSheet,
} from "react-native";

const ProfileTournaments = ({ tournaments, navigation }) => {
  return (
    <View>
      <Text style={styles.tournamentsTitle}>My Tournaments</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tournaments}
      >
        {tournaments.map((tournament) => (
          <TouchableOpacity
            key={tournament.id}
            style={styles.tournament}
            onPress={() => navigation.navigate("Tournament", { tournament })}
          >
            <Text style={styles.tournamentName}>{tournament.name}</Text>
            <Text style={styles.championshipName}>
              {tournament.championshipName}
            </Text>
            <Text style={styles.startingDate}>
              Starting Date:{" "}
              {tournament.startingDate.toLocaleDateString("en-GB")}
            </Text>
            <Text style={styles.endingDate}>
              Ending Date: {tournament.endingDate.toLocaleDateString("en-GB")}
            </Text>
            <Text style={styles.signedPlayers}>
              Participants: {tournament.signedPlayers}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tournamentsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tournaments: {
    marginBottom: 20,
  },
  tournament: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 4,
    padding: 10,
    marginRight: 10,
  },
  tournamentName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  championshipName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#3b5998",
  },
  startingDate: {
    fontSize: 12,
    color: "#192f6a",
  },
  endingDate: {
    fontSize: 12,
    color: "#192f6a",
  },
  signedPlayers: {
    fontSize: 12,
    color: "#192f6a",
  },
});

export default ProfileTournaments;
