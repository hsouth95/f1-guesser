import { View, Text, StyleSheet } from "react-native";

import France from "logos/france.svg";
import { useTracks } from "@/hooks/useTracks";
import { TrackLogo } from "@/components/TrackLogo";

export default function GuesserScreen() {
  const { getRandomTrack } = useTracks();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Track Guesser</Text>
      <View style={styles.trackContainer}>
        <TrackLogo trackName={getRandomTrack().name} />
      </View>
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
  trackContainer: {
    flex: 1,
    alignItems: "center",
  },
});
