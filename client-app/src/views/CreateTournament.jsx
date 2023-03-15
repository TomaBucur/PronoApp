import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function CreateTournament() {
  const navigation = useNavigation();
  const [isEditable, setIsEditable] = useState(false);
  const [tournamentName, setTournamentName] = useState("Tournament Name")

  const handleEditNamePress = () => {
    setIsEditable(oldValue => !oldValue);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tournamentNameWrapper}>

        {!isEditable ?
          <Text style={styles.tournamentWrapperLeft}>{tournamentName}</Text> : 
          <TextInput style={styles.textInput} onChangeText={text => setTournamentName(text)}/>
          }  
        
        <TouchableOpacity style={styles.tournamentWrapperRight}
          onPress={handleEditNamePress}
        >
            <Text>{isEditable ? 'Save' : 'Edit'} </Text>
          </TouchableOpacity> 
      </View>
     
      
      <Text style={styles.text}>Create Tournament</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    gap: 10
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
  textInput: {
    borderWidth: 2,
    minWidth: 50,
    maxWidth: 250,
  }
});

export default CreateTournament;