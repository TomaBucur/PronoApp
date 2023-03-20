import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import getMockData from "../components/MockDataProvider";
import { LinearGradient } from "expo-linear-gradient";
import ProfileHeader from "../components/ProfileHeader";
import ProfileDetails from "../components/ProfileDetails";
import ProfileAchievements from "../components/ProfileAchievements";
import ProfileTournaments from "../components/ProfileTournaments";

function MyProfile() {
  const navigation = useNavigation();
  const mockUser = getMockData().users[0];
  const mockTournaments = getMockData().tournaments;
  const mockAchievements = getMockData().achievements;

  return (
    <LinearGradient
      colors={["#0081C9", "#5BC0F8", "#86E5FF", "#FFC93C"]}
      style={styles.container}
    >
      <ProfileHeader user={mockUser} />
      <ProfileTournaments
        tournaments={mockTournaments}
        navigation={navigation}
      />
      <ProfileDetails user={mockUser} />
      <ProfileAchievements achievements={mockAchievements} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
});

export default MyProfile;
