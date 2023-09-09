import { Track, TrackFileName, TrackName } from "@/types/tracks";
import trackData from "../../tracks.json";

export const useTracks = () => {
  const getRandomTrack = (): Track => {
    const keys = Object.keys(trackData);

    const randomKey = (keys.length * Math.random()) << 0;

    return {
      fileName: keys[randomKey] as TrackFileName,
      name: trackData[keys[randomKey]] as TrackName,
    };
  };

  return {
    getRandomTrack,
  };
};
