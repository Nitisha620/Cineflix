import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (
            <>
              <View className="flex-0 flex-row items-center">
                <ImageBackground
                  source={images.highlight}
                  className="flex-row justify-center items-center rounded-full"
                  style={{
                    minWidth: 115,
                    minHeight: 50,
                  }}
                >
                  <Image
                    source={icons.home}
                    tintColor="#151312"
                    className="size-5"
                  />
                  <Text
                    className="text-secondary text-base font-semibold ml-2"
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    Home
                  </Text>
                </ImageBackground>
              </View>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _Layout;
