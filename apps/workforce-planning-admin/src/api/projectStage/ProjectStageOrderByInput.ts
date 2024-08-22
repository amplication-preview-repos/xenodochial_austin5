import { SortOrder } from "../../util/SortOrder";

export type ProjectStageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  projectId?: SortOrder;
  stageNumber?: SortOrder;
  updatedAt?: SortOrder;
};
