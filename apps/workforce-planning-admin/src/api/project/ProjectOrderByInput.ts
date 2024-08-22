import { SortOrder } from "../../util/SortOrder";

export type ProjectOrderByInput = {
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
