import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ContactUs() {
  const navigation = useNavigation();

  const mockCompany = {
    name: "Awesome Company",
    address: "123 Main St, Anytown, USA",
    phoneNumber: "+1 (555) 123-4567",
    email: "info@awesomecompany.com",
    website: "www.awesomecompany.com",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>Company Name</Text>
        <Text style={styles.text}>{mockCompany.name}</Text>

        <Text style={styles.header}>Address</Text>
        <Text style={styles.text}>{mockCompany.address}</Text>

        <Text style={styles.header}>Phone Number</Text>
        <Text style={styles.text}>{mockCompany.phoneNumber}</Text>

        <Text style={styles.header}>Email</Text>
        <Text style={styles.text}>{mockCompany.email}</Text>

        <Text style={styles.header}>Website</Text>
        <Text style={styles.text}>{mockCompany.website}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  content: {
    paddingBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default ContactUs;
