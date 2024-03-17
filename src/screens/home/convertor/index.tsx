import { View, Text } from "react-native";
import React from "react";
import ApiData from "../../../../features/access-coinapi-data";
import {
  Ionicons,
  Fontisto,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import Exchanger from "../../components/converter";

const Convertor = () => {
  //   ApiData();
  return (
    <View className="flex-1 px-4">
      {/**Header */}
      <View className="flex flex-row text-center space-x-16 mt-16">
        <View className="p-2 rounded-full bg-white">
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </View>
        <View>
          <Text className="text-2xl font-bold">Convertor</Text>
        </View>
      </View>

      {/**board activity */}
      <Exchanger />
    </View>
  );
};

export default Convertor;
