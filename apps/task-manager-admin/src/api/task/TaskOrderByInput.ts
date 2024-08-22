import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  assignee?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  statusId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
