import React, { useState } from "react";
import { Svg, Image, Ellipse, ClipPath } from "react-native-svg";
import { Dimensions, StyleSheet, View, Text, Pressable } from "react-native";
import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";
import Animated, {
  interpolate,
  log,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import axios from "axios";
import Api from "../../../utilities/Api";

const defaultValues = {
  email: "",
  password: "",
  username: "",
}

const baseURL = "http://192.168.1.137:5002/api/"

function Registration() {

  const [formFields, setFormFields] = useState(defaultValues);

  const { email, password, username } = formFields;


  const handleFormChange = (name, value) => {

    console.log(formFields)
    console.log(name, value)

    setFormFields({...formFields, [name]: value} );
  }

  const { height, width } = Dimensions.get("window");
  const imagePosition = useSharedValue(1);
  const formButtonScale = useSharedValue(1);
  const [isRegistering, setIsRegistering] = useState();

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 1.75, 0]
    );
    return {
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, { duration: 500 }),
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const closeButtonContainerStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 800 }),
      transform: [
        { rotate: withTiming(interpolation + "deg", { duration: 1000 }) },
      ],
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        imagePosition.value === 0
          ? withDelay(400, withTiming(1, { duration: 800 }))
          : withTiming(0, { duration: 300 }),
    };
  });

  const formButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: formButtonScale.value }],
    };
  });

  const handleRegisterSubmit = async () => {
    console.log("Ciupapi")
    console.log(formFields); // Check the current values of formFields
    const data = {
      Email: email,
      Password: password,
      Username: username,
    };
    console.log(data); // Check the values of the data object being sent to the server
    try {
      const url = "${baseURL}Auth/Register";
      const response = await axios.post(url, data);
      console.log(response.data);
      alert(response.data);
    } catch (error) {
      console.log(error);
      alert(`Error: ${error.message}`);
    }
  };
  
  


  const handleLoginSubmit = async () => {
    const data = {
      Email: email,
      Password: password,
    };
    try {
      const url = "${baseURL}Auth/Login";
      const response = await axios.post(url, data);
      console.log(response.data);
      alert(response.data);
    } catch (error) {
      console.log(error);
      alert(`Error: ${error.message}`);
    }
  };
  

  const loginHandler = () => {
    imagePosition.value = 0;
    if (isRegistering) {
      setIsRegistering(false);
    }
  };

  const registerHandler = () => {
    imagePosition.value = 0;
    if (!isRegistering) {
      setIsRegistering(true);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Svg height={height + 100} width={width}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>
          <Image
            href={require("../../../../assets/images/login_background.jpg")}
            width={width}
            height={height + 100}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipPathId)"
          />
        </Svg>
        <Animated.View
          style={[styles.closeButtonContainer, closeButtonContainerStyle]}
        >
          <Text onPress={() => (imagePosition.value = 1)}>Back</Text>
        </Animated.View>
      </Animated.View>
      <View style={styles.bottomContainer}>
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable style={styles.button} onPress={loginHandler}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable style={styles.button} onPress={registerHandler}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={[styles.formInput, formAnimatedStyle]}>
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            placeholder="Email"
            placeholderTextColor="black"
            style={styles.textInput}
            onChangeText={(v) => handleFormChange("email", v)}          />
          {isRegistering && (
            <TextInput

              placeholder="User Name"
              placeholderTextColor="black"
              style={styles.textInput}
              name="username"
              value={username}
              onChangeText={(v) => handleFormChange("username", v)}
            />
          )}

          <TextInput
            placeholder="Password"
            placeholderTextColor="black"
            style={styles.textInput}
            name="password"
            value={password}
            onChangeText={(v) => handleFormChange("password", v)}
          />
          <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
            <Pressable
              onPress={() =>
                (formButtonScale.value = withSequence(
                  withSpring(1.2),
                  withSpring(1)
                ))
              }
            >{isRegistering ? (

              <Pressable onPress={handleRegisterSubmit}>
                <Text style={styles.buttonText}>REGISTER</Text>
              </Pressable>

            ) : (
              <Pressable  onPress={handleLoginSubmit}>
                <Text style={styles.buttonText} >Login</Text>
              </Pressable>
            )}

            </Pressable>
          </Animated.View>
        </Animated.View>
      </View>
    </View>
  );
}

export default Registration;