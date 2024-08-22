import { SortOrder } from "../../util/SortOrder";

export type ContractorAssignmentOrderByInput = {
  contractorId?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  loading?: SortOrder;
  projectStageId?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
