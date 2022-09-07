import { View, Text, SafeAreaView, Image, TextInput } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <Text>
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-y bg-gray-300 p-4 rounded-full"
          />

          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xl">
              Current Location
              <AntDesign name="downcircleo" size={20} color="#00CCBB" />
            </Text>
          </View>
          <FontAwesome5 name="user-circle" size={25} color="#00CCBB" />
        </View>

        {/* Search */}
        <View>
          <View>
          <AntDesign name="search1" size={20} color="black" />
          <TextInput placeholder="Restaurants and Cuisines" />
          </View>
          <FontAwesome name="exchange" size={20} color="#00CCBB" />
        </View>
      </Text>
    </SafeAreaView>
  );
}
