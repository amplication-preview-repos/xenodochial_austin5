import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  id?: SortOrder;
  taskId?: SortOrder;
  updatedAt?: SortOrder;
};
