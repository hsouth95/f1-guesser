import { Track, TrackFileName, TrackName } from "@/types/tracks";
import trackData from "../../tracks.json";
import { useMemo, useState } from "react";

export const useTracks = () => {
  const [remainingTracks, setRemainingTracks] = useState<TrackName[]>(
    Object.values(trackData) as TrackName[]
  );
  const randomTrack = useMemo((): Track => {
    const keys = Object.keys(remainingTracks);

    const randomKey = (keys.length * Math.random()) << 0;

    return {
      fileName: keys[randomKey] as TrackFileName,
      name: remainingTracks[keys[randomKey]] as TrackName,
    };
  }, [remainingTracks]);

  const getAllTrackNames = (): TrackName[] => {
    return Object.values(trackData) as TrackName[];
  };

  const removeTrack = (trackName: TrackName) => {
    setRemainingTracks((remainingTracks) =>
      remainingTracks.filter((track) => track !== trackName)
    );
  };

  const resetTracks = () => {
    setRemainingTracks(Object.values(trackData) as TrackName[]);
  };

  return {
    randomTrack,
    getAllTrackNames,
    removeTrack,
    resetTracks,
  };
};
