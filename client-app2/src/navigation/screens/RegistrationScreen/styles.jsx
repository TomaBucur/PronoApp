import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "rgba(123,104,238,0.6)",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "white",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
    letterSpacing: 0.5,
  },
  bottomContainer: {
    justifyContent: "center",
    height: height / 2.5,
    paddingBottom: 20,   
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 50,
    paddingLeft: 10,
  },
  formButton: {
    backgroundColor: "rgba(123,104,238,0.6)",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius:3.84,
    elevation: 5, 
  },
  formInput: {
    marginBottom: 20,
    ...StyleSheet.absoluteFill,
    zIndex: -1,
    justifyContent: "center",
  },
  closeButtonContainer: {
    height:40,
    width: 40,
    justifyContent: 'center',
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 5,
    },
    shadowOpacity: 0.35,
    shadowRadius:7,
    elevation:1,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 50,
    top:-20,
  }
});

export default styles;
