import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";
import { RetweetCreateNestedManyWithoutTweetsInput } from "./RetweetCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  content?: string | null;
  createdBy?: string | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
  retweets?: RetweetCreateNestedManyWithoutTweetsInput;
};
