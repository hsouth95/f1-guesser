export interface Track {
  name: string;
  url: string;
  trackName: string;
  country: string;
  emoji?: string;
}

export type TrackName =
  | "England"
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
