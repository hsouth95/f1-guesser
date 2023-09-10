import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { useRef, useState } from "react";

import { useTracks } from "@/hooks/useTracks";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";

export default function GuesserScreen() {
  const [guessCount, setGuessCount] = useState(0);
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
  const {
    randomTrack,
    getAllTrackNames,
    removeTrack,
    resetTracks,
    getTrackByName,
  } = useTracks();
  const dropdownRef = useRef<SelectDropdown>(null);

  const trackName = randomTrack.name;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>F1 Track Guesser</Text>
          <Text>Guessed: {guessCount} times</Text>
        </View>
        <View style={styles.trackContainer}>
          <Image
            style={{ width: "100%", height: "100%" }}
            contentFit="contain"
            transition={700}
            source={{
              uri: randomTrack.url,
            }}
          />
          <Text style={styles.disclaimerText}>
            Images taken from Sportmonks
          </Text>
        </View>
        <View style={styles.valueContainer}>
          <SelectDropdown
            data={getAllTrackNames()}
            ref={dropdownRef}
            defaultButtonText="Select a track"
            onSelect={(selectedItem) => {
              setSelectedTrack(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem) => {
              return selectedItem;
            }}
            rowTextForSelection={(item) => {
              return `${getTrackByName(item).emoji} ${item}`;
            }}
          />
        </View>

        <View style={styles.valueContainer}>
          <TouchableOpacity
            style={{
              ...styles.guessButton,
              ...(selectedTrack === null ? styles.guessButtonDisabled : {}),
            }}
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
                          setSelectedTrack(null);
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
                        setSelectedTrack(null);
                        dropdownRef.current?.reset();
                      },
                    },
                  ]);
                }
              } else {
                Alert.alert("Incorrect!");
              }
            }}
          >
            <Text style={styles.guessButtonText}>Guess</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 8,
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    fontSize: 24,
  },
  trackContainer: {
    flex: 2,
    marginBottom: 16,
  },
  valueContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 16,
  },
  guessButton: {
    padding: 16,
    backgroundColor: "#eee",
  },
  guessButtonDisabled: {
    opacity: 0.5,
  },
  guessButtonText: {
    fontSize: 20,
  },
  disclaimerText: {
    fontSize: 12,
    fontStyle: "italic",
    textAlign: "center",
  },
});
