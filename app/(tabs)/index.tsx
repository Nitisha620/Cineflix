import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, View } from "react-native";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#030014",
      }}
    >
      <Image
        style={{
          position: "absolute",
          width: "100%",
          zIndex: 0,
        }}
        source={images.bg}
      />
      <ScrollView
        style={{
          flex: 1,
          padding: 5,
        }}
        showsVerticalScrollIndicator = {false}
        contentContainerStyle={{
          minHeight: "100%",
          paddingBottom: 10,
        }}
      >
        <Image
          style={{
            width: 40,
            height: 100,
            marginTop: 60,
            marginBottom: 0,
            margin: "auto",
          }}
          source={icons.logo}
        />
        <Image
          style={{
            width: 40,
            height: 100,
            marginTop: 60,
            marginBottom: 0,
            margin: "auto",
          }}
          source={icons.logo}
        />
      </ScrollView>
    </View>
  );
}
