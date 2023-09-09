import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { useTracks } from "@/hooks/useTracks";
import { TrackLogo } from "@/components/TrackLogo";
import SelectDropdown from "react-native-select-dropdown";
import { useState } from "react";
import { TrackName } from "@/types/tracks";

export default function GuesserScreen() {
  const [selectedTrack, setSelectedTrack] = useState<TrackName | null>(null);
  const { randomTrack, getAllTrackNames } = useTracks();

  const trackName = randomTrack.name;

  console.log(trackName);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Track Guesser</Text>
      <View style={styles.trackContainer}>
        <TrackLogo trackName={trackName} />
      </View>
      <View style={styles.trackContainer}>
        <SelectDropdown
          data={getAllTrackNames()}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setSelectedTrack(selectedItem as TrackName);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
        />
      </View>

      <View style={styles.trackContainer}>
        <TouchableOpacity
          disabled={selectedTrack === null}
          onPress={() => {
            console.log("Guessing", selectedTrack);
          }}
        >
          <Text>Guess</Text>
        </TouchableOpacity>
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
