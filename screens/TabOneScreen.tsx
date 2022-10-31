import { StyleSheet, Text } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"Market">) {
  return (
    <View className="bg-slate-500">
      <Text className="text-fuchsia-400 text-2xl">Tab One</Text>

      <View
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
    </View>
  );
}
