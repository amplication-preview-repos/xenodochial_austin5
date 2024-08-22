import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  contractEndDate?: SortOrder;
  contractStartDate?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  loading?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
