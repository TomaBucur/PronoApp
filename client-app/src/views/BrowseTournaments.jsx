import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import BrowseTournamentsTournament from '../components/BrowseTournamentsTournament';
import getMockData from '../components/MockDataProvider';

function BrowseTournaments() {
  // const tournaments = [
  //   {
  //     name: 'Tournament 1',
  //     participants: 30,
  //     championship: 'Premier League',
  //     status: 'open',
  //     userCount: 15,
  //   },
  //   {
  //     name: 'Tournament 2',
  //     participants: 30,
  //     championship: 'La Liga',
  //     status: 'closed',
  //     userCount: 20,
  //   },
  //   {
  //     name: 'Tournament 3',
  //     participants: 30,
  //     championship: 'Serie A',
  //     status: 'ongoing',
  //     userCount: 25,
  //   },
  // ];

  const tournaments = getMockData().tournaments;

  const navigation = useNavigation();
  const [tournamentCode, setTournamentCode] = useState('');
  const [sortedTournaments, setSortedTournaments] = useState(tournaments);


  const handleCodeSubmit = () => {
    // Handle code submission
    console.log(`Code submitted: ${tournamentCode}`);
  };

  const sortByStatus = (status) => {
    const sorted = [...tournaments] // Create a shallow copy of the tournaments array
      .filter((tournament) => status === 'all' || tournament.status === status) // Filter by status if status is not 'all'
      .sort((a, b) => { // Sort by status in ascending order
        if (a.status < b.status) return -1;
        if (a.status > b.status) return 1;
        return 0;
      });

    setSortedTournaments(sorted);
  };

  return (
    <LinearGradient
      colors={["#5BC0F8", "#86E5FF", "#FFF3A1", "#FFDE6F",]}
      style={styles.container}
    >
      <Text style={styles.pageTitle}>Browse Tournaments</Text>
      {/* Participate with tournament code feature */}
      <View style={styles.tournamentCodeContainer}>
        <Text style={styles.tournamentCodeLabel}>CODE:</Text>
        <TextInput
          style={styles.tournamentCodeInput}
          placeholder="Insert tournament code"
          value={tournamentCode}
          onChangeText={setTournamentCode}
        />
        <TouchableOpacity style={styles.tournamentCodeButton} onPress={handleCodeSubmit}>
          <Text style={styles.tournamentCodeButtonText}>GO</Text>
        </TouchableOpacity>
      </View>
      {/* Sorting feature*/}
      <View style={styles.sortingContainer}>
        <Text style={styles.sortingLabel}>Sort by:</Text>
        <TouchableOpacity style={styles.sortingButton} onPress={() => sortByStatus('all')}>
          <Text style={styles.sortingButtonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortingButton} onPress={() => sortByStatus('open')}>
          <Text style={styles.sortingButtonText}>Open</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortingButton} onPress={() => sortByStatus('ongoing')}>
          <Text style={styles.sortingButtonText}>Ongoing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortingButton} onPress={() => sortByStatus('closed')}>
          <Text style={styles.sortingButtonText}>Closed</Text>
        </TouchableOpacity>
      </View>


      <ScrollView
        contentContainerStyle={styles.tournamentsListContainer}
        showsVerticalScrollIndicator={false}
      >
        {tournaments &&
          tournaments.map((tournament, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => console.log(`Tournament ${tournament.name} pressed`)}
            >
              <BrowseTournamentsTournament {...tournament} />
            </TouchableOpacity>
          ))}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: Dimensions.get('window').width * 0.05,
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "black",
    marginBottom: 15,
  },
  sortingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  sortingLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  sortingButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
  sortingButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  tournamentCodeInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  tournamentCodeButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  tournamentCodeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  tournamentCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  tournamentCodeLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default BrowseTournaments;
