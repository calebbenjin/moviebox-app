import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

type Props = {
  onPress: () => void;
  placeholder: string;
};

const SearchBar = ({ onPress, placeholder }: Props) => {
  return (
    <View className="flex-row z-50 items-center bg-dark-200 rounded-full px-5 py-4 w-full">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#fff"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white border border-red-300"
      />
    </View>
  );
};

export default SearchBar;
