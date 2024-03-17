import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import LottieView from "lottie-react-native";
import React, { useState, useEffect } from "react";
import { getDimension } from "../../helpers/globalHelpers";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  Feather,
  Fontisto,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { FireBaseAuth } from "../../../FirebaseBaseConfig";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoaid] = useState(false);
  const auth = FireBaseAuth;
  // const sdk = new MoonPayAuthSDK('pk_test_123')

  const signIn = async () => {
    setIsLoaid(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      setIsLoaid(false);
    } catch (error) {
      setIsLoaid(false);
      alert("Sign in failed: " + error);
    } finally {
      setIsLoaid(false);
    }
  };

  const signUp = async () => {
    setIsLoaid(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      setIsLoaid(false);
      alert("Check you email");
      setEmail("");
      setPassword("");
    } catch (error) {
      setIsLoaid(false);
      alert("Sign up failed: " + error);
    } finally {
      setIsLoaid(false);
    }
  };
  const { width } = getDimension();

  return isLoading ? (
    <View className="flex-1 justify-center items-center">
      <LottieView
        style={{
          width: width,
          height: width,
        }}
        source={require("../../../assets/btnLoader.json")}
        autoPlay
        loop
      />
    </View>
  ) : (
    <View className="flex-1">
      {/* Logo */}
      <LottieView
        style={{
          width: width * 1,
          height: width * 0.8,
        }}
        source={require("../../../assets/logo.json")}
        autoPlay
        loop
      />
      {/* Header */}
      <View className="flex justify-center items-center">
        <Text className="text-3xl font-semibold">Register</Text>
      </View>
      {/* Form input */}
      <View className="flex justify-center items-center mt-10 space-y-6">
        {/**userName */}
        <KeyboardAvoidingView
          behavior="padding"
          className="flex justify-center items-center space-y-6"
        >
          <View
            className="rounded-full bg-white flex flex-row items-center space-x-5 p-2"
            style={{ width: width * 0.9 }}
          >
            <View className="p-2 rounded-full bg-pink-100">
              <Feather name="user" size={28} color="pink" />
            </View>
            <TextInput style={{ width: width * 0.7 }} placeholder="username" />
          </View>
          {/* Email */}
          <View
            className="rounded-full bg-white flex flex-row space-x-5 p-2"
            style={{ width: width * 0.9 }}
          >
            <View className="bg-green-100 p-2 rounded-full justify-center items-center">
              <Fontisto name="email" size={28} color="green" />
            </View>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              style={{ width: width * 0.7 }}
              placeholder="Email"
            />
          </View>
          {/* Password */}
          <View
            className="rounded-full bg-white flex flex-row space-x-5 p-2"
            style={{ width: width * 0.9 }}
          >
            <View className="bg-blue-100 p-2 rounded-full justify-center items-center">
              <Feather name="unlock" size={28} color="blue" />
            </View>
            <TextInput
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{ width: width * 0.7 }}
              placeholder="Password"
            />
          </View>
        </KeyboardAvoidingView>
      </View>
      {/* Button */}
      <View className="flex justify-center items-center mt-10">
        <TouchableOpacity
          onPress={signUp}
          style={{ width: width * 0.8 }}
          className="bg-black justify-center items-center rounded-full py-5"
        >
          <Text className="text-white">Sign Up</Text>
        </TouchableOpacity>
      </View>
      {/**Icons */}
      <View className="flex flex-row items-center justify-around mt-3">
        <View className="p-2 bg-white rounded-full items-center justify-center">
          <MaterialIcons name="facebook" size={40} color="blue" />
        </View>
        <View className="p-2 bg-white rounded-full items-center justify-center">
          <Fontisto name="google" size={40} color="red" />
        </View>
        <View className="p-2 bg-white rounded-full items-center justify-center">
          <AntDesign name="apple1" size={40} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Register;
