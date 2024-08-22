import { StringFilter } from "../../util/StringFilter";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type LikeWhereInput = {
  id?: StringFilter;
  tweet?: TweetWhereUniqueInput;
};
