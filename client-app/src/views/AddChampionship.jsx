import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function AddChampionship(props) {
  const navigation = useNavigation();
  const [selectedChampionship, setSelectedChampionship] = useState(null);

  const championships = [
    // { name: 'English Premier League', id: 1, teams: 20, country: 'England', image: require('../assets/epl.png') },
    { name: 'English Premier League', id: 1, teams: 20, country: 'England', image: require('../../assets/epl.png'), championshipType: "League"},
    { name: 'La Liga', id: 2, teams: 20, country: 'Spain', image: require('../../assets/laLiga.png'), championshipType: "League"},
    { name: 'Bundesliga', id: 3, teams: 18, country: 'Germany', image: require('../../assets/bundesliga.png'), championshipType: "League" },
    { name: 'Serie A', id: 4, teams: 20, country: 'Italy', image: require('../../assets/seriaA.png'), championshipType: "League"},
    { name: 'Ligue 1', id: 5, teams: 20, country: 'France', image: require('../../assets/ligue1.png'), championshipType: "League"},
    { name: 'UEFA Champions League', id: 6, teams: 32, country: 'Europe', image: require('../../assets/championsLeague.png'), championshipType: "Cup"},
    { name: 'UEFA Europa League', id: 7, teams: 48, country: 'Europe', image: require('../../assets/europaLeague.png'), championshipType: "Cup"},
    { name: 'FIFA World Cup', id: 8, teams: 32, country: 'International', image: require('../../assets/worldCup.png'), championshipType: "Cup"},
  ];

  const handleChampionshipSelect = (championship) => {
    setSelectedChampionship(championship);
    props.onChampionshipSelect(championship);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Championship</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {championships.map(championship => (
          <TouchableOpacity
            key={championship.id}
            style={styles.championship}
            onPress={() => handleChampionshipSelect(championship)}
          >
            <View style={styles.championshipDetails}>
              <View style={styles.championshipImageContainer}>
                <Image source={championship.image} style={styles.championshipImage} />
              </View>
            </View>
              <View style={styles.championshipInfo}>
                <Text style={styles.championshipName}>{championship.name}</Text>
                <Text style={styles.championshipCountry}>{championship.country}</Text>
                <Text style={styles.championshipTeams}>{championship.teams} Teams</Text>
                <Text style={styles.championshipType}>{championship.championshipType}</Text>
              </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  championship: {
backgroundColor: 'red',
borderRadius: 10,
padding: 10,
marginVertical: 10,
width: '100%',
elevation: 2,
},
championshipDetails: {
flexDirection: 'row',
alignItems: 'center',
},
championshipImageContainer: {
width: 80,
height: 80,
borderRadius: 10,
overflow: 'hidden',
marginRight: 10,
},
championshipImage: {
width: '100%',
height: '100%',
resizeMode: 'cover',
},
championshipInfo: {
flex: 1,
},
championshipName: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 5,
},
championshipCountry: {
fontSize: 14,
color: '#666',
marginBottom: 5,
},
championshipTeams: {
fontSize: 14,
color: '#636',
},
championshipType: {
  fontSize: 18,
  color: "black"
}
});

export default AddChampionship;