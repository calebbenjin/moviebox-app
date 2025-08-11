import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

const searchBar = () => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#fff"
      />
      <TextInput
      onPress={() => {}}
      value=""
      onChangeText={() => {}}
        placeholder="Search"
        placeholderTextColor="#fff"
        className="flex-1 ml-3 text-white"
        style={{ fontSize: 16 }}
      />
    </View>
  );
};

export default searchBar;
