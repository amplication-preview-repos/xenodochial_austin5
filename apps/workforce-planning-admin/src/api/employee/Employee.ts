import { EmployeeAssignment } from "../employeeAssignment/EmployeeAssignment";

export type Employee = {
  contractEndDate: Date | null;
  contractStartDate: Date | null;
  createdAt: Date;
  employeeAssignments?: Array<EmployeeAssignment>;
  id: string;
  loading: number | null;
  name: string | null;
  updatedAt: Date;
};
