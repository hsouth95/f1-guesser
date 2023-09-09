import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Platform, StatusBar } from "react-native";

import GuesserScreen from "@/screens/GuesserScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <GuesserScreen />
    </SafeAreaProvider>
  );
}
