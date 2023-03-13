import React from 'react'
import { Text, View, Button } from 'react-native'

function UserTournaments({navigation}) {
  return (
    <View>
        <Text>UserTournaments</Text>
        <Button
          title="Go Home"
          onPress={() => navigation.navigate('Home')}
        />
    </View>
    
  )
}

export default UserTournaments