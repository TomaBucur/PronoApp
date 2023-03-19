import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";

const ProfileDetails = ({ detailsExpanded, setDetailsExpanded, user }) => {
  const formatDate = (date) => {
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  return (
    <>
      <Text style={styles.detailsTitle}>Details</Text>
      <View style={styles.separator} />
      <TouchableOpacity onPress={() => setDetailsExpanded(!detailsExpanded)}>
        <Text style={styles.expandCollapseArrow}>
          {" "}
          {detailsExpanded ? "▲" : "▼"}
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={detailsExpanded}
        onRequestClose={() => {
          setDetailsExpanded(!detailsExpanded);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.details}>
              <Text>Email: {user.email}</Text>
              <Text>Phone: {user.phone}</Text>
              <Text>
                Registration Date: {formatDate(user.registrationDate)}
              </Text>
              <Text>User Role: {user.userRole}</Text>
            </View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setDetailsExpanded(!detailsExpanded)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  detailsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  separator: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  expandCollapseArrow: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "80%",
    maxHeight: "80%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  details: {
    flexDirection: "column",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ProfileDetails;
