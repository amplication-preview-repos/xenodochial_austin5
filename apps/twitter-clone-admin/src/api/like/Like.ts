import { Tweet } from "../tweet/Tweet";

export type Like = {
  createdAt: Date;
  id: string;
  tweet?: Tweet | null;
  updatedAt: Date;
};
