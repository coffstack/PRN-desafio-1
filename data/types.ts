import { ImageSourcePropType } from "react-native";
export interface News {
  id: number;
  topIncremental?: TopIncremental;
  title: string;
  subTitle?: string;
  image?: ImageSourcePropType;
  date?: string;
  category?: string;
  related?: {
    id: number;
    title: string;
  }[];
}

type TopIncremental =
  | { type: "especial"; content: string }
  | { type: "soccer"; content: Soccer }
  | { type: "simple"; content: string };

export interface Team {
  name: string;
  abbreviation: string;
  symbol: ImageSourcePropType;
  goalsScored: number;
  goalsConceded: number;
}

interface Soccer {
  homeTeam: Team;
  visitingTeam: Team;
  additionalTitle: string;
}
