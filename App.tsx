import { SafeAreaView } from "react-native-safe-area-context";
import { Platform, StatusBar } from "react-native";

import GuesserScreen from "@/screens/GuesserScreen";

export default function App() {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        // paddingHorizontal: 16,
        flex: 1,
      }}
    >
      <GuesserScreen />
    </SafeAreaView>
  );
}
