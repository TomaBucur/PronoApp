import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProfileHeader = ({ user }) => {
  return (
    <View style={styles.pronostics}>
      <View style={styles.goodPronostics}>
        <Text style={styles.goodCount}>{user.goodPronostics}</Text>
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
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <View style={styles.badPronostics}>
        <Text style={styles.badCount}>{user.badPronostics}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default ProfileHeader;
