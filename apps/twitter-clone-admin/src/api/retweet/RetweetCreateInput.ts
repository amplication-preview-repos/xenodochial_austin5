import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type RetweetCreateInput = {
  tweet?: TweetWhereUniqueInput | null;
};
