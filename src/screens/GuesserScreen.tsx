import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { useRef, useState } from "react";

import { useTracks } from "@/hooks/useTracks";
import { TrackLogo } from "@/components/TrackLogo";
import { TrackName } from "@/types/tracks";

export default function GuesserScreen() {
  const [guessCount, setGuessCount] = useState(0);
  const [selectedTrack, setSelectedTrack] = useState<TrackName | null>(null);
  const { randomTrack, getAllTrackNames, removeTrack, resetTracks } =
    useTracks();
  const dropdownRef = useRef<SelectDropdown>(null);

  const trackName = randomTrack.name;

  console.log(trackName);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Track Guesser</Text>
      <Text>Guessed: {guessCount} times</Text>
      <View style={styles.valueContainer}>
        <TrackLogo trackName={trackName} />
      </View>
      <View style={styles.trackContainer}>
        <SelectDropdown
          data={getAllTrackNames()}
          ref={dropdownRef}
          defaultButtonText="Select a track"
          onSelect={(selectedItem) => {
            setSelectedTrack(selectedItem as TrackName);
          }}
          buttonTextAfterSelection={(selectedItem) => {
            return selectedItem;
          }}
        />
      </View>

      <View style={styles.valueContainer}>
        <TouchableOpacity
          disabled={selectedTrack === null}
          onPress={() => {
            if (selectedTrack === trackName) {
              // Check if we're on the last track
              if (guessCount + 1 === getAllTrackNames().length) {
                Alert.alert(
                  "You win!",
                  "You've guessed all the tracks! Want to start again?",
                  [
                    {
                      text: "Ok",
                      onPress: () => {
                        console.log("Reset");
                        resetTracks();
                        setGuessCount(0);
                        dropdownRef.current?.reset();
                      },
                    },
                  ]
                );
              } else {
                Alert.alert("Correct!", "Nice one!", [
                  {
                    text: "Next Track",
                    onPress: () => {
                      setGuessCount(guessCount + 1);
                      removeTrack(trackName);
                      dropdownRef.current?.reset();
                    },
                  },
                ]);
              }
            } else {
              alert("Incorrect!");
            }
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
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  valueContainer: {
    flex: 1,
    alignItems: "center",
  },
});
