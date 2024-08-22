import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { RetweetListRelationFilter } from "../retweet/RetweetListRelationFilter";

export type TweetWhereInput = {
  content?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  retweets?: RetweetListRelationFilter;
};
