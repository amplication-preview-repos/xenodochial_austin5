import { SortOrder } from "../../util/SortOrder";

export type ContractorOrderByInput = {
  contractEndDate?: SortOrder;
  contractStartDate?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  loading?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
