import { TrackName } from "@/types/tracks";
import France from "logos/france.svg";
import GreatBritain from "logos/greatbritain.svg";

interface TrackLogoProps {
  trackName: TrackName;
}

export const TrackLogo = ({ trackName }: TrackLogoProps) => {
  switch (trackName) {
    case "France":
      return <France height={100} width={100} />;
    case "Silverstone":
      return <GreatBritain height={100} width={100} />;
  }
};
