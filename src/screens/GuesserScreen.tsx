import { View, Text, StyleSheet } from "react-native";

import France from "logos/france.svg";

export default function GuesserScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Track Guesser</Text>
      <France />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
  },
});
