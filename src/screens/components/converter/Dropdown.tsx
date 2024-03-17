import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import { getDimension } from "../../../helpers/globalHelpers";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
];

type Data = {
  label: string;
  value: string;
};

interface DropdownProps {
  style?: any;
  placeholderStyle?: any;
  selectedTextStyle?: any;
  inputSearchStyle?: any;
  iconStyle?: any;
  data?: any;
  search?: any;
  maxHeight?: any;
  maxWidth?: any;
  labelField?: any;
  valueField?: any;
  placeholder?: any;
  searchPlaceholder?: any;
  value?: any;
  onChange?: any;
  renderLeftIcon?: any;
}

const Dropdownbox: React.FC<DropdownProps> = ({ style }) => {
  const [value, setValue] = useState<any>(null);
  const { width } = getDimension();
  return (
    <View>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={(item: Data) => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
          <View className="bg-teal-200 px-5 py-3 rounded-full h-16 w-16 justify-center items-center">
            <Fontisto name="dollar" size={24} color="teal" />
            <Text className="absolute left-16">US dollar</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    // margin: 16,
    width: 170,
    height: 70,
    backgroundColor: '#FFFFFF',
    // borderBottomColor: "gray",
    // borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default Dropdownbox;
