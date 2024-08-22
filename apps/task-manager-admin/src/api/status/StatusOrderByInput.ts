import { SortOrder } from "../../util/SortOrder";

export type StatusOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
