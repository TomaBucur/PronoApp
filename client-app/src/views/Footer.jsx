import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2023 ToBu & RoChi </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  footer: {
    height: 30,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerText: {
    color: "white",
    fontSize: 12,
  },
});

export default Footer
