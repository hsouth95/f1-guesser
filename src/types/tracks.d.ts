export interface Track {
  name: TrackName;
  fileName: TrackFileName;
}

export type TrackName = "Silverstone" | "France";
export type TrackFileName = "greatbritain" | "france";
