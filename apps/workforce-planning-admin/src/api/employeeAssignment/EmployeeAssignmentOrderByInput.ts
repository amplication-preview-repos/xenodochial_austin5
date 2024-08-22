import { SortOrder } from "../../util/SortOrder";

export type EmployeeAssignmentOrderByInput = {
  createdAt?: SortOrder;
  employeeId?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  loading?: SortOrder;
  positionRequirementId?: SortOrder;
  projectId?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
