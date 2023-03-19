import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import getMockData from "../components/MockDataProvider";
import { LinearGradient } from "expo-linear-gradient";

function MyProfile () {
  const navigation = useNavigation();
  const [detailsExpanded, setDetailsExpanded] = useState(false);

  const mockUser = getMockData().users[0];
  const mockTournaments = getMockData().tournaments;
  const mockAchievements = getMockData().achievements;

  const formatDate = (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  return (
    <LinearGradient
      colors={["#0081C9", "#5BC0F8", "#86E5FF", "#FFC93C"]}
      style={styles.container}
    >
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
        <Text style={styles.expandCollapseArrow}>
          {detailsExpanded ? "▲" : "▼"}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={detailsExpanded}
        onRequestClose={() => {
          setDetailsExpanded(!detailsExpanded);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.details}>
              <Text>Email: {mockUser.email}</Text>
              <Text>Phone: {mockUser.phone}</Text>
              <Text>
                Registration Date: {formatDate(mockUser.registrationDate)}
              </Text>
              <Text>User Role: {mockUser.userRole}</Text>
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setDetailsExpanded(!detailsExpanded)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.achievements}>
        <Text style={styles.achievementsTitle}>Achievements</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.achievementsList}
        >
          {mockAchievements.map((achievement, index) => (
            <Image
              key={index}
              source={achievement.image}
              style={styles.achievementImage}
            />
          ))}
        </ScrollView>
      </View>

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
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 5,
    position: "relative",
  },
  profilePhoto: {
    width: 115,
    height: 115,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
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
  pronostics: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  goodPronostics: {
    backgroundColor: "#fff",
    padding: 10,
    opacity: 0.5,
    borderRadius: 10,
    alignItems: "center",
  },
  badPronostics: {
    backgroundColor: "#fff",
    opacity: 0.5,
    borderRadius: 10,
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
  expandCollapseArrow: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "80%",
    maxHeight: "80%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  details: {
    flexDirection: "column",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  achievements: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  achievementsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  achievementsList: {
    marginBottom: 20,
  },
  achievementImage: {
    width: 40,
    height: 40,
    marginRight: 10,
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

export default MyProfile;
