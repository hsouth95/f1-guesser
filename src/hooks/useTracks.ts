import { Track, TrackFileName, TrackName } from "@/types/tracks";
import trackData from "../../tracks.json";
import { useMemo } from "react";

export const useTracks = () => {
  const randomTrack = useMemo((): Track => {
    const keys = Object.keys(trackData);

    const randomKey = (keys.length * Math.random()) << 0;

    return {
      fileName: keys[randomKey] as TrackFileName,
      name: trackData[keys[randomKey]] as TrackName,
    };
  }, []);

  const getAllTrackNames = (): TrackName[] => {
    return Object.values(trackData) as TrackName[];
  };

  return {
    randomTrack,
    getAllTrackNames,
  };
};
