import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function MatchEvents({ events }) {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Event</Text>
        <Text style={styles.headerText}>Minute</Text>
      </View>
      {/* <ScrollView style={styles.eventsContainer}>
        {events.map((event) => (
          <View key={event.id} style={styles.event}>
            <Text style={styles.eventText}>
              {event.eventType} - {event.player} ({event.team})
            </Text>
            <Text style={styles.eventText}>{event.minute}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(124, 124, 124, 0.3)",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  eventsContainer: {
    flexGrow: 1,
  },
  event: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    paddingHorizontal: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  eventText: {
    fontSize: 14,
  },
});

export default MatchEvents;