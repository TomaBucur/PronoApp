import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Switch, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AddChampionship from './AddChampionship';

function CreateTournament() {
  const navigation = useNavigation();
  const [isEditable, setIsEditable] = useState(false);
  const [tournamentName, setTournamentName] = useState("Tournament Name")
  const [isPublic, setIsPublic] = useState(false);
  const [showAddChampionshipModal, setShowAddChampionshipModal] = useState(false);
  const [selectedChampionshipName, setSelectedChampionshipName] = useState("");

  const handleEditNamePress = () => {
    setIsEditable(oldValue => !oldValue);
  }

  const handleAddChampionshipPress = () => {
    setShowAddChampionshipModal(true);
  }

  const handleAddChampionshipModalClose = (championshipName) => {
    setSelectedChampionshipName(championshipName);
    setShowAddChampionshipModal(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tournamentNameWrapper}>

        {!isEditable ?
          <Text style={styles.tournamentName}>{tournamentName}</Text> : 
          <TextInput style={styles.tournamentNameInput} defaultValue={tournamentName} onChangeText={text => setTournamentName(text)}/>
        }  
        
        <TouchableOpacity style={styles.tournamentWrapperRight}
          onPress={handleEditNamePress}
        >
            <Text style={styles.editButton}>{isEditable ? 'Save' : 'Edit'} </Text>
        </TouchableOpacity> 
      </View>

      <View style={styles.tournamentNameWrapper}>
        {/* Use selectedChampionshipName or "Add championship" as the button title */}
        <Button title={selectedChampionshipName || "Add championship"} onPress={handleAddChampionshipPress} />
        <Switch
          value={isPublic}
          onValueChange={() => setIsPublic(oldState => !oldState)}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isPublic ? "#f5dd4b" : "#f4f3f4"}
        />
         <Text style={styles.label}>{isPublic ? "Private" : "Public" }</Text>
      </View>

      <Text style={styles.text}>Create Tournament</Text>

      {/* Use animationType="slide" to make the modal slide up from the bottom */}
      <Modal
        visible={showAddChampionshipModal}
        onRequestClose={() => setShowAddChampionshipModal(false)}
        animationType="slide"
      >
        {/* Render AddChampionship component and pass handleAddChampionshipModalClose as onClose prop */}
        <AddChampionship onClose={handleAddChampionshipModalClose} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  tournamentNameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tournamentName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  tournamentNameInput: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    flex: 1,
  },
  tournamentWrapperRight: {
    marginLeft: 'auto',
  },
  editButton: {
    color: '#007aff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default CreateTournament;