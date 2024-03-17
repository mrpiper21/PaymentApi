import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { FireBaseAuth } from "../../../../FirebaseBaseConfig";
import { useNavigation } from "@react-navigation/native";
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { getDimension } from "../../../helpers/globalHelpers";

const Activityboard = () => {
  const { width, height } = getDimension();
  const navigation = useNavigation() as any;

  return (
    <View className="bg-slate-100 rounded-t-3xl space-y-5">
      <View className="flex flex-row px-4 items-center justify-between mt-4">
        <View
          style={{ width: width * 0.45 }}
          className="flex flex-row bg-white items-center space-x-4 py-2 px-3 rounded-full"
        >
          <View className="bg-pink-200 p-2 rounded-full">
            <MaterialCommunityIcons
              name="calculator-variant-outline"
              size={40}
              color="pink"
            />
          </View>
          <Text className="text-lg">calculator</Text>
        </View>
        <View
          style={{ width: width * 0.45 }}
          className="flex flex-row bg-white items-center space-x-4 py-2 px-3 rounded-full"
        >
          <View className="bg-green-200 p-2 rounded-full">
            <MaterialIcons name="compare" size={40} color="green" />
          </View>
          <Text className="text-lg">compare</Text>
        </View>
      </View>
      <View className="flex flex-row px-4 items-center justify-between">
        <TouchableOpacity onPress={() => navigation.navigate("Convert")}>
          <View
            style={{ width: width * 0.45 }}
            className="flex flex-row bg-white items-center space-x-4 py-2 px-3 rounded-full"
          >
            <View className="bg-orange-200 p-2 rounded-full">
              <MaterialCommunityIcons
                name="compare-horizontal"
                size={40}
                color="orange"
              />
            </View>
            <Text className="text-lg">Convert</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{ width: width * 0.45 }}
          className="flex flex-row bg-white items-center space-x-4 py-2 px-3 rounded-full"
        >
          <View className="bg-blue-200 p-2 rounded-full">
            <Ionicons name="pricetags-outline" size={40} color="blue" />
          </View>
          <Text className="text-lg">compare</Text>
        </View>
      </View>
    </View>
  );
};

export default Activityboard;
