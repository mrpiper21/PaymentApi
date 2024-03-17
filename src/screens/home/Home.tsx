import { View, Text } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { FireBaseAuth } from "../../../FirebaseBaseConfig";
import { Entypo, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import { getDimension } from "../../helpers/globalHelpers";
import Activityboard from "../components/homeComponents/Activityboard";

interface RouterProp {
  navigation: NavigationProp<RouterProp>;
}

const Home = ({ navigation }: RouterProp) => {
  const { width, height } = getDimension();
  return (
    <View className="flex-1">
      {/**header */}
      <View style={{ height: height * 0.32 }} className="bg-teal-600">
        <View className="flex mt-10 space-y-5 flex-row justify-between px-8">
          <View>
            <Text className="text-2xl font-semibold text-white">Home</Text>
            <Text className="text-white">Fiat Exchange</Text>
          </View>
          <View className="bg-white p-3 rounded-full ">
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </View>
        </View>
      </View>
      {/**Activity */}
      <View style={{ top: height * 0.25, width: width }} className="absolute">
        <Activityboard />
      </View>

      {/**Trending */}
      <View className=" px-4" style={{ marginTop: height * 0.17 }}>
        <Text className="text-2xl font-semibold">Trending</Text>
        <View className="flex flex-row space-x-3 mt-7 items-center justify-between">
          <View className="flex flex-row space-x-3 mt-7 items-center">
            <View className="p-5 bg-orange-200 rounded-full">
              <Fontisto name="bitcoin" size={33} color="orange" />
            </View>
            <View>
              <Text className="text-lg font-semibold">Bitcoin</Text>
              <Text>BTC</Text>
            </View>
          </View>
          <View className="justify-center items-end">
            <Text className="text-xl">$32,128.80</Text>
            <Text className="tex-lg">2.6%</Text>
          </View>
        </View>
      </View>
      {/* <Text onPress={() => FireBaseAuth.signOut()}>Home</Text> */}
    </View>
  );
};

export default Home;
