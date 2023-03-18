import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyProfile = () => {
  const navigation = useNavigation();
  const mockUser = {
    id: 1,
    name: 'Mihai Viteazul',
    email: 'mihai.viteazul@example.com',
    password: 'password123',
    phone: '123-456-7890',
    goodPronostics: 10,
    badPronostics: 5,
    registrationDate: new Date('2023-01-01'),
    userRole: 'USER',
    tournamentId: 1,
    // Add Tournaments and UserPronosticChampionship when available
  };

  const formatDate = (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <Image
            source={require('../../assets/profile_photo_placeholder.jpg')}
            style={styles.profilePhoto}
          />
          <Text style={styles.name}>{mockUser.name}</Text>
        </View>
        
        <View style={styles.achievementInfo}>
          <Text style={styles.medalTitle}>Achievement Pin</Text>
          <Image
            source={require('../../assets/achievement_placeholder.png')}
            style={styles.achievement}
          />
        </View>
      </View>


      <Text style={styles.detailsTitle}>Details</Text>
      <View style={styles.separator} />

      <View style={styles.details}>
        <Text>Email: {mockUser.email}</Text>
        <Text>Phone: {mockUser.phone}</Text>
        <Text>
          Registration Date: {formatDate(mockUser.registrationDate)}
        </Text>
        {/* <Text>User Role: {mockUser.userRole}</Text> */}
        
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('UserTournaments')}
        >
          <Text style={styles.buttonText}>My Tournaments</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('UserAchievements')}
        >
          <Text style={styles.buttonText}>Achievements</Text>
        </TouchableOpacity>        
      </View>

      {/* <View style={styles.pronostics}>
        <Text style={styles.pronosticsTitle}>Pronostics</Text>
        <View style={styles.pronosticsCount}>
          <View style={styles.goodPronostics}>
            <Text style={styles.goodCount}>{mockUser.goodPronostics}</Text>
          </View>
          <View style={styles.badPronostics}>
            <Text style={styles.badCount}>{mockUser.badPronostics}</Text>
          </View>
        </View>
      </View> */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileInfo: {
    alignItems: 'center',
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  pronostics: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  pronosticsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pronosticsCount: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
  },
  goodPronostics: {
    borderRightWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    padding: 10,
  },
  badPronostics: {
    backgroundColor: '#fff',
    padding: 10,
  },
  goodCount: {
    color: '#008000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  badCount: {
    color: '#ff0000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  achievementInfo: {
    alignItems: 'center',
  },
  medalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  achievement: {
    width: 80,
    height: 80,
    marginTop: 10,
  },
  detailsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  separator: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  details: {
    flexDirection: 'column',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default MyProfile;

