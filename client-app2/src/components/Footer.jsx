import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';


const FooterMenu = ({ colors }) => {
  const [activeTab, setActiveTab] = useState('Profile');

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    navigation.navigate(tabName);
  };

  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={[
          styles.tab,
          activeTab === 'Profile' && { backgroundColor: colors[0] },
        ]}
        onPress={() => handleTabPress('Profile')}
      >
        <Image
          source={require('../../assets/images/profile_icon.png')}
          style={styles.tabIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tab,
          activeTab === 'UserTournaments' && { backgroundColor: colors[1] },
        ]}
        onPress={() => handleTabPress('UserTournaments')}
      >
        <Image
          source={require('../../assets/images/user_tournaments_icon.png')}
          style={styles.tabIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tab,
          activeTab === 'BrowseTournaments' && { backgroundColor: colors[2] },
        ]}
        onPress={() => handleTabPress('BrowseTournaments')}
      >
        <Image
          source={require('../../assets/images/browse_icon.png')}
          style={styles.tabIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tab,
          activeTab === 'CreateTournament' && { backgroundColor: colors[3] },
        ]}
        onPress={() => handleTabPress('CreateTournament')}
      >
        <Image
          source={require('../../assets/images/create_tournament_icon.png')}
          style={styles.tabIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tab,
          activeTab === 'Friends' && { backgroundColor: colors[4] },
        ]}
        onPress={() => handleTabPress('Friends')}
      >
        <Image
          source={require('../../assets/images/friends_icon.png')}
          style={styles.tabIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: '100%',
    borderRadius: 8,
  },
  tabIcon: {
    height: 30,
    width: 30,
    marginBottom: 4,
  },
});

export default FooterMenu;
