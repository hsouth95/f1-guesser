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
import Australia from "logos/australia.svg";

interface TrackLogoProps {
  trackName: TrackName;
}

export const TrackLogo = ({ trackName }: TrackLogoProps) => {
  const defaultParams = {
    height: "100%",
    width: "100%",
  };

  switch (trackName) {
    case "France":
      return <France {...defaultParams} />;
    case "England":
      return <GreatBritain {...defaultParams} />;
    case "Abu Dhabi":
      return <AbuDhabi {...defaultParams} />;
    case "Australia":
      return <Australia {...defaultParams} />;
    case "Austria":
      return <Austria {...defaultParams} />;
    case "Azerbaijan":
      return <Azerbaijan {...defaultParams} />;
    case "Bahrain":
      return <Bahrain {...defaultParams} />;
    case "Belgium":
      return <Belgium {...defaultParams} />;
    case "Brazil":
      return <Brazil {...defaultParams} />;
    case "Canada":
      return <Canada {...defaultParams} />;
    case "China":
      return <China {...defaultParams} />;
    case "Hungary":
      return <Hungary {...defaultParams} />;
    case "Italy":
      return <Italy {...defaultParams} />;
    case "Japan":
      return <Japan {...defaultParams} />;
    case "Mexico":
      return <Mexico {...defaultParams} />;
    case "Monaco":
      return <Monaco {...defaultParams} />;
    case "Netherlands":
      return <Netherlands {...defaultParams} />;
    case "Russia":
      return <Russia {...defaultParams} />;
    case "Singapore":
      return <Singapore {...defaultParams} />;
    case "Spain":
      return <Spain {...defaultParams} />;
    case "USA":
      return <UnitedStates {...defaultParams} />;
    default:
      return <France {...defaultParams} />;
  }
};
