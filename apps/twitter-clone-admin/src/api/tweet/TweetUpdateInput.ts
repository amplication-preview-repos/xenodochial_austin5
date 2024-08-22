import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";
import { RetweetUpdateManyWithoutTweetsInput } from "./RetweetUpdateManyWithoutTweetsInput";

export type TweetUpdateInput = {
  content?: string | null;
  createdBy?: string | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
  retweets?: RetweetUpdateManyWithoutTweetsInput;
};
