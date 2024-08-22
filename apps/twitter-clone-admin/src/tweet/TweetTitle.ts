import { Tweet as TTweet } from "../api/tweet/Tweet";

export const TWEET_TITLE_FIELD = "createdBy";

export const TweetTitle = (record: TTweet): string => {
  return record.createdBy?.toString() || String(record.id);
};
