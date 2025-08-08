import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text } from "react-native";

const TabIcons = () => (
  <>
    <ImageBackground
      source={images.highlight}
      className="flex flex-1 flex-row w-full rounded-full min-w-[112px] min-h-14 mt-4 justify-center items-center overflow-hidden "
    >
      <Image source={icons.home} tintColor="#15132" className="size-5" />
      <Text className="text-secondary ml-2 text-base font-semibold ">Home</Text>
    </ImageBackground>
  </>
);

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <>
              <ImageBackground
                source={images.highlight}
                className="flex flex-1 flex-row w-full rounded-full min-w-[112px] min-h-14 mt-4 justify-center items-center overflow-hidden "
              >
                <Image
                  source={icons.home}
                  tintColor="#15132"
                  className="size-5"
                />
                <Text className="text-secondary ml-2 text-base font-semibold ">
                  Home
                </Text>
              </ImageBackground>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{ title: "Search", headerShown: false }}
      />
      <Tabs.Screen
        name="saved"
        options={{ title: "Saved", headerShown: false }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", headerShown: false }}
      />
    </Tabs>
  );
};

export default _layout;
