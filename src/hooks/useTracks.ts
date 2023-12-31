import { Track } from "@/types/tracks";
import trackData from "../../tracks.json";
import { useMemo, useState } from "react";

export const useTracks = () => {
  const [remainingTracks, setRemainingTracks] = useState<Track[]>(
    Object.values(trackData) as Track[]
  );
  const randomTrack = useMemo((): Track => {
    const keys = Object.keys(remainingTracks);

    const randomKey = (keys.length * Math.random()) << 0;

    return remainingTracks[randomKey];
  }, [remainingTracks]);

  const getAllTrackNames = useMemo(() => {
    return Object.values(trackData)
      .map((track) => track.name)
      .sort((a, b) => {
        if (a < b) return -1;
        if (b < a) return 1;
        return 0;
      }) as string[];
  }, [trackData]);

  const removeTrack = (trackName: string) => {
    setRemainingTracks((remainingTracks) =>
      remainingTracks.filter((track) => track.name !== trackName)
    );
  };

  const getTrackByName = (trackName: string): Track => {
    return Object.values(trackData).find((track) => track.name === trackName)!;
  };

  const resetTracks = () => {
    setRemainingTracks(Object.values(trackData) as Track[]);
  };

  return {
    randomTrack,
    getAllTrackNames,
    removeTrack,
    resetTracks,
    getTrackByName,
  };
};
