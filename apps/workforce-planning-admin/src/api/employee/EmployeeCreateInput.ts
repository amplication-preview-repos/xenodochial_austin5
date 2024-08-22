import { EmployeeAssignmentCreateNestedManyWithoutEmployeesInput } from "./EmployeeAssignmentCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  contractEndDate?: Date | null;
  contractStartDate?: Date | null;
  employeeAssignments?: EmployeeAssignmentCreateNestedManyWithoutEmployeesInput;
  loading?: number | null;
  name?: string | null;
};
