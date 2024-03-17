import { View, Text } from "react-native";
import React from "react";
import {
  Ionicons,
  Fontisto,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

import Dropdownbox from "./Dropdown";

const Exchanger = () => {
  return (
    <View>
      <View className=" flex flex-col my-5">
        <View className="flex flex-row items-center justify-between mt-20 px-6">
          <View className="flex flex-row space-x-4 items-center">
            <Dropdownbox />
          </View>
          <Text>amount</Text>
        </View>
      </View>
      <View className="flex items-center justify-center">
        <MaterialCommunityIcons
          name="compare-vertical"
          size={33}
          color="black"
        />
      </View>
      <View className="flex flex-row items-center justify-between px-6">
        <View className="flex flex-row space-x-4 items-center">
          <View className="bg-teal-200 px-5 py-3 rounded-full">
            <Fontisto name="dollar" size={24} color="teal" />
          </View>
          <View className="space-y-2">
            <View className="flex flex-row space-x-2 items-center">
              <Text className="font-bold text-xl">USD</Text>
              <AntDesign name="down" size={10} color="black" />
            </View>
            <Text>US Dollar</Text>
          </View>
        </View>
        <Text>amount</Text>
      </View>
    </View>
  );
};

export default Exchanger;
