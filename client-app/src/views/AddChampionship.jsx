import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import getMockData from '../components/MockDataProvider';

function ModalChampionship(props) {
  const navigation = useNavigation();
  const [selectedChampionship, setSelectedChampionship] = useState(null);

  const championships = getMockData().championships;

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

export default ModalChampionship;