import { EmployeeAssignmentUpdateManyWithoutEmployeesInput } from "./EmployeeAssignmentUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  contractEndDate?: Date | null;
  contractStartDate?: Date | null;
  employeeAssignments?: EmployeeAssignmentUpdateManyWithoutEmployeesInput;
  loading?: number | null;
  name?: string | null;
};
