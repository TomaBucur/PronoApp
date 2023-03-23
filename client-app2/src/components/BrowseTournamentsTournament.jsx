import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

function BrowseTournamentsTournament({
  name,
  totalPositions,
  championship,
  status,
  usersSignedInTournament,
  image,
}) {
  const statusColors = {
    open: "green",
    closed: "red",
    ongoing: "orange",
  };

  return (
    <View style={styles.tournamentContainer}>
      <View style={styles.tournamentLeftContainer}>
        <Text style={styles.tournamentName}>{name}</Text>
        <Text style={styles.tournamentChampionship}>{championship}</Text>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.achievementImage} />
        </View>
      </View>
      <View style={styles.tournamentRightContainer}>
        <Text style={styles.tournamentParticipants}>
          {usersSignedInTournament}/{totalPositions}
        </Text>
        <TouchableOpacity
          style={[
            styles.tournamentStatusButton,
            { backgroundColor: statusColors[status] },
          ]}
          disabled={status !== "open"}
        >
          <Text style={styles.tournamentStatusButtonText}>{status}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  achievementImage: {
    width: 40,
    height: 40,
  },
  tournamentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 20, // Add padding bottom to create space for the footer
  },
  tournamentLeftContainer: {
    flex: 1,
  },
  tournamentName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tournamentChampionship: {
    fontSize: 14,
  },
  imageContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  tournamentRightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tournamentParticipants: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  tournamentStatusButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  tournamentStatusButtonText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "capitalize",
  },
});

export default BrowseTournamentsTournament;
