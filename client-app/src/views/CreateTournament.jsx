import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CreateTournament() {
  const navigation = useNavigation();
  const [isEditable, setIsEditable] = useState(false);
  const [tournamentName, setTournamentName] = useState("Tournament Name")
  const [isPublic, setIsPublic] = useState(false);

  const handleEditNamePress = () => {
    setIsEditable(oldValue => !oldValue);
    
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
        <Button title='Add championship' />
        <Switch
          value={isPublic}
          onValueChange={() => setIsPublic(oldState => !oldState)}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isPublic ? "#f5dd4b" : "#f4f3f4"}
        />
         <Text style={styles.label}>{isPublic ? "Public" : "Private"}</Text>
      </View>
      
      
      <Text style={styles.text}>Create Tournament</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tournamentNameInput: {
    fontSize: 30,
    fontWeight: "bold",
    // textAlign: "center",
    // marginVertical: 20,
    borderWidth: 2,
    minWidth: 50,
    maxWidth: 250,
  },
  tournamentName: {
    fontSize: 30,
    fontWeight: "bold",
  },
  editButton: {
    // alignItems: 'center',
    // textAlign: 'center',
    // textAlignVertical: 'center',
    marginVertical: 'auto',
    // justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tournamentNameWrapper: {
    // flex: 1,
    // justifyContent: 'space-between',
    // alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
    // paddingHorizontal: 10
  },
  tournamentWrapperLeft: {
    // flexDirection: 'row',
    // alignItems: 'center'
  },
  tournamentWrapperRight: {
    // flexDirection: 'row',
    // alignItems: 'center'
  },
  label: {
    marginLeft: 8
  }
});

export default CreateTournament;