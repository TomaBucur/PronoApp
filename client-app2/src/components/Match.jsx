import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MatchEvents from './MatchEvents';
import MatchHighlight from './MatchHighlight';
import getMockData from './MockDataProvider';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from '@react-navigation/native';


function Match({navigation}) {
  const route = useRoute();
  const { match, tournament } = route.params;
  console.log("IN MECI")
  console.log(match)
  console.log(tournament)
    // const matchData = getMockData().matchData;
    const pronosticData = getMockData().pronosticData.find(obj => obj.id = match.id);
    // const tournamentData = getMockData().tournaments[0];

  return (
    <LinearGradient
      colors={["#5BC0F8", "#86E5FF", "#FFF3A1", "#FFDE6F", "#69D4B4", "#A1F4D6" ]}
      style={styles.container}
    >
      <Text style={styles.championshipName}>{tournament.championshipName}</Text>
      <Text style={styles.tournamentName}>Tournament Name</Text>
      <Button title="Go Back" onPress={() => navigation.navigate("Tournament", { tournament })} />
      <MatchHighlight matchData={match} pronosticData={pronosticData} tournamentData={tournament} />
      <Text style={styles.matchDetails}>Match Events</Text>
      <MatchEvents events={match.events} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  championshipName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  tournamentName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  matchDetails: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Match;
