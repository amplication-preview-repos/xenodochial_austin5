import { EmployeeAssignmentWhereInput } from "./EmployeeAssignmentWhereInput";
import { EmployeeAssignmentOrderByInput } from "./EmployeeAssignmentOrderByInput";

export type EmployeeAssignmentFindManyArgs = {
  where?: EmployeeAssignmentWhereInput;
  orderBy?: Array<EmployeeAssignmentOrderByInput>;
  skip?: number;
  take?: number;
};
