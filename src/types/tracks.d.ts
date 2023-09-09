export interface Track {
  name: TrackName;
  fileName: TrackFileName;
}

export type TrackName =
  | "Silverstone"
  | "France"
  | "Abu Dhabi"
  | "Monaco"
  | "Australia"
  | "Austria"
  | "Bahrain"
  | "Belgium"
  | "Canada"
  | "China"
  | "Hungary"
  | "Italy"
  | "Japan"
  | "Mexico"
  | "Netherlands"
  | "Russia"
  | "Singapore"
  | "Spain"
  | "USA"
  | "Azerbaijan"
  | "Brazil";
export type TrackFileName = "greatbritain" | "france";
