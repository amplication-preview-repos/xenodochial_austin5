import { Tweet } from "../tweet/Tweet";

export type Retweet = {
  createdAt: Date;
  id: string;
  tweet?: Tweet | null;
  updatedAt: Date;
};
