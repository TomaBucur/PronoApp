import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

const ProfileAchievements = ({ achievements }) => {
  return (
    <View style={styles.achievements}>
      <Text style={styles.achievementsTitle}>Achievements</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.achievementsList}
      >
        {achievements.map((achievement, index) => (
          <Image
            key={index}
            source={achievement.image}
            style={styles.achievementImage}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default ProfileAchievements;
