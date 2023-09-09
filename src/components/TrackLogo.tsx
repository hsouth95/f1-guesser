import { TrackName } from "@/types/tracks";
import France from "logos/france.svg";
import GreatBritain from "logos/greatbritain.svg";
import AbuDhabi from "logos/abudhabi.svg";
import Austria from "logos/austria.svg";
import Azerbaijan from "logos/azerbaijan.svg";
import Bahrain from "logos/bahrain.svg";
import Belgium from "logos/belgium.svg";
import Brazil from "logos/brazil.svg";
import Canada from "logos/canada.svg";
import China from "logos/china.svg";
import Hungary from "logos/hungary.svg";
import Italy from "logos/italy.svg";
import Japan from "logos/japan.svg";
import Mexico from "logos/mexico.svg";
import Monaco from "logos/monaco.svg";
import Netherlands from "logos/netherlands.svg";
import Russia from "logos/russia.svg";
import Singapore from "logos/singapore.svg";
import Spain from "logos/spain.svg";
import UnitedStates from "logos/usa.svg";

interface TrackLogoProps {
  trackName: TrackName;
}

export const TrackLogo = ({ trackName }: TrackLogoProps) => {
  switch (trackName) {
    case "France":
      return <France height={100} width={100} />;
    case "Silverstone":
      return <GreatBritain height={100} width={100} />;
    case "Abu Dhabi":
      return <AbuDhabi height={100} width={100} />;
    case "Austria":
      return <Austria height={100} width={100} />;
    case "Azerbaijan":
      return <Azerbaijan height={100} width={100} />;
    case "Bahrain":
      return <Bahrain height={100} width={100} />;
    case "Belgium":
      return <Belgium height={100} width={100} />;
    case "Brazil":
      return <Brazil height={100} width={100} />;
    case "Canada":
      return <Canada height={100} width={100} />;
    case "China":
      return <China height={100} width={100} />;
    case "Hungary":
      return <Hungary height={100} width={100} />;
    case "Italy":
      return <Italy height={100} width={100} />;
    case "Japan":
      return <Japan height={100} width={100} />;
    case "Mexico":
      return <Mexico height={100} width={100} />;
    case "Monaco":
      return <Monaco height={100} width={100} />;
    case "Netherlands":
      return <Netherlands height={100} width={100} />;
    case "Russia":
      return <Russia height={100} width={100} />;
    case "Singapore":
      return <Singapore height={100} width={100} />;
    case "Spain":
      return <Spain height={100} width={100} />;
    case "USA":
      return <UnitedStates height={100} width={100} />;
    default:
      return <France height={100} width={100} />;
  }
};
