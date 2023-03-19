import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import getMockData from '../components/MockDataProvider';

function UserTournaments() {
  const navigation = useNavigation();

  const tournaments = getMockData().tournaments;

  const [selectedTournament, setSelectedTournament] = React.useState(null);

  const onCloseModal = () => {
    setSelectedTournament(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Tournaments</Text>
      <ScrollView style={styles.tournamentList}>
        {tournaments.map((tournament) => (
          <TouchableOpacity
            key={tournament.id}
            style={styles.tournamentItem}
            onPress={() => setSelectedTournament(tournament)}
          >
            <Text style={styles.tournamentName}>{tournament.name}</Text>
            <Text style={styles.championshipName}>{tournament.championshipName}</Text>
            <Text style={styles.dateRange}>
              {tournament.startingDate.toLocaleDateString("en-GB")} - {tournament.endingDate.toLocaleDateString("en-GB")}
            </Text>
            <TouchableOpacity
              style={styles.positionButton}
              onPress={() => navigation.navigate("TournamentLeaderboard", { tournamentId: tournament.id })}
            >
              <Text style={styles.positionText}>{tournament.userPosition}</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {selectedTournament && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={true}
          onRequestClose={onCloseModal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>{selectedTournament.name}</Text>
              <Text style={styles.modalChampionship}>{selectedTournament.championshipName}</Text>
              <Text style={styles.modalDateRange}>
                {selectedTournament.startingDate.toLocaleDateString("en-GB")} - {selectedTournament.endingDate.toLocaleDateString("en-GB")}
              </Text>
              <Text style={styles.modalStatus}>Status: {selectedTournament.tournamentStatus}</Text>
              <Text style={styles.modalParticipants}>Participants: {selectedTournament.signedPlayers}</Text>
              <TouchableOpacity style={styles.closeButton} onPress={onCloseModal}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tournamentList: {
    width: '100%',
  },
  tournamentItem: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tournamentName: {
  fontSize: 18,
  fontWeight: 'bold',
  flex: 1,
  },
  championshipName: {
  fontSize: 14,
  fontStyle: 'italic',
  color: '#777',
  flex: 1,
  },
  dateRange: {
  fontSize: 12,
  color: '#555',
  flex: 1,
  },
  positionButton: {
  backgroundColor: '#4c669f',
  borderRadius: 4,
  padding: 5,
  marginLeft: 10,
  },
  positionText: {
  color: '#fff',
  fontSize: 14,
  },
  centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 22,
  },
  modalView: {
  backgroundColor: 'white',
  borderRadius: 20,
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
  width: 0,
  height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
  maxWidth: '80%',
  },
  modalTitle: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 10,
  },
  modalChampionship: {
  fontSize: 18,
  fontStyle: 'italic',
  color: '#777',
  marginBottom: 5,
  },
  modalDateRange: {
  fontSize: 14,
  color: '#555',
  marginBottom: 10,
  },
  modalStatus: {
  fontSize: 14,
  fontWeight: 'bold',
  marginBottom: 5,
  },
  modalParticipants: {
  fontSize: 14,
  marginBottom: 20,
  },
  closeButton: {
  backgroundColor: '#4c669f',
  borderRadius: 20,
  padding: 10,
  elevation: 2,
  },
  closeButtonText: {
  color: 'white',
  fontSize: 14,
  fontWeight: 'bold',
  textAlign: 'center',
  },
  });
  
  export default UserTournaments;
