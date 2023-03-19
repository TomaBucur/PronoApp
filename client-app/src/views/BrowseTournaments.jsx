import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

function Tournament({ name, participants, championship, status, userCount }) {
  const statusColors = {
    open: 'green',
    closed: 'red',
    ongoing: 'orange',
  };

  return (
    <View style={styles.tournamentContainer}>
      <View style={styles.tournamentLeftContainer}>
        <Text style={styles.tournamentName}>{name}</Text>
        <Text style={styles.tournamentChampionship}>{championship}</Text>
      </View>
      <View style={styles.tournamentRightContainer}>
        <Text style={styles.tournamentParticipants}>
          {userCount}/{participants}
        </Text>
        <TouchableOpacity
          style={[
            styles.tournamentStatusButton,
            { backgroundColor: statusColors[status] },
          ]}
          disabled={status !== 'open'}
        >
          <Text style={styles.tournamentStatusButtonText}>{status}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function BrowseTournaments() {
  const tournaments = [
    {
      name: 'Tournament 1',
      participants: 30,
      championship: 'Premier League',
      status: 'open',
      userCount: 15,
    },
    {
      name: 'Tournament 2',
      participants: 30,
      championship: 'La Liga',
      status: 'closed',
      userCount: 20,
    },
    {
      name: 'Tournament 3',
      participants: 30,
      championship: 'Serie A',
      status: 'ongoing',
      userCount: 25,
    },
  ];
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
      colors={["#5BC0F8", "#86E5FF","#FFF3A1", "#FFDE6F",]}
      style={styles.container}
    >
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
              <Tournament {...tournament} />
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
  tournamentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    },
    tournamentLeftContainer: {
    flex: 1,
    },
    tournamentName: {
    fontSize: 18,
    fontWeight: 'bold',
    },
    tournamentChampionship: {
    fontSize: 14,
    },
    tournamentRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    },
    tournamentParticipants: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    },
    tournamentStatusButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    },
    tournamentStatusButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'capitalize',
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
    tournamentsListContainer: {
    paddingBottom: 20,
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
    });
    
    export default BrowseTournaments;
