import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import getMockData from "../components/MockDataProvider";

const MyProfile = () => {
  const navigation = useNavigation();
  const [detailsExpanded, setDetailsExpanded] = useState(false);

  const mockUser = getMockData().users[0];

  const mockData = getMockData();
  const mockTournaments = mockData.tournaments;

  const formatDate = (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.pronostics}>
        <View style={styles.goodPronostics}>
          <Text style={styles.goodCount}>{mockUser.goodPronostics}</Text>
        </View>
        <View>
          <View style={styles.header}>
            <Image
              source={require("../../assets/profile_photo_placeholder.jpg")}
              style={styles.profilePhoto}
            />
            <Image
              source={require("../../assets/achievement_placeholder.png")}
              style={styles.achievementPlaceholder}
            />
          </View>
          <Text style={styles.name}>{mockUser.name}</Text>
        </View>
        <View style={styles.badPronostics}>
          <Text style={styles.badCount}>{mockUser.badPronostics}</Text>
        </View>
      </View>
      <Text style={styles.detailsTitle}>Details</Text>
      <View style={styles.separator} />
      <TouchableOpacity onPress={() => setDetailsExpanded(!detailsExpanded)}>
        {detailsExpanded && (
          <View style={styles.details}>
            <Text>Email: {mockUser.email}</Text>
            <Text>Phone: {mockUser.phone}</Text>
            <Text>
              Registration Date: {formatDate(mockUser.registrationDate)}
            </Text>
            <Text>User Role: {mockUser.userRole}</Text>
            <View style={styles.achievements}>
              <Text style={styles.achievementsTitle}>Achievements</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("UserAchievements")}
              >
                <Text style={styles.achievementsCount}>
                  {mockUser.goodPronostics + mockUser.badPronostics}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <Text style={styles.expandCollapseArrow}>
          {detailsExpanded ? "▲" : "▼"}
        </Text>
      </TouchableOpacity>

      <Text style={styles.tournamentsTitle}>My Tournaments</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.tournaments}
      >
        {mockTournaments.map((tournament) => (
          <TouchableOpacity
            key={tournament.id}
            style={styles.tournament}
            onPress={() =>
              navigation.navigate("UserTournament", {
                tournamentId: tournament.id,
              })
            }
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  achievementPlaceholder: {
    zIndex: 2,
    marginRight: 35,
    width: 30,
    height: 30,
    borderRadius: 10,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  expandCollapseArrow: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 5,
    position: "relative",
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  pronostics: {
    marginTop: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  goodPronostics: {
    backgroundColor: "#fff",
    padding: 10,
    alignItems: "center",
  },
  badPronostics: {
    backgroundColor: "#fff",
    padding: 10,
    alignItems: "center",
  },
  goodCount: {
    color: "#008000",
    fontSize: 16,
    fontWeight: "bold",
  },
  badCount: {
    color: "#ff0000",
    fontSize: 16,
    fontWeight: "bold",
  },
  detailsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  separator: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  details: {
    flexDirection: "column",
    marginBottom: 20,
  },
  achievements: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 20,
  },
  achievementsTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  achievementsCount: {
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginLeft: 5,
  },
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
});

export default MyProfile;
