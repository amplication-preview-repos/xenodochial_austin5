import { StringFilter } from "../../util/StringFilter";
import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type RetweetWhereInput = {
  id?: StringFilter;
  tweet?: TweetWhereUniqueInput;
};
