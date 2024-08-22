import { SortOrder } from "../../util/SortOrder";

export type TweetOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
