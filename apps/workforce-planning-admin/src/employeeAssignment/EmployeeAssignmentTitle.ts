import { EmployeeAssignment as TEmployeeAssignment } from "../api/employeeAssignment/EmployeeAssignment";

export const EMPLOYEEASSIGNMENT_TITLE_FIELD = "id";

export const EmployeeAssignmentTitle = (
  record: TEmployeeAssignment
): string => {
  return record.id?.toString() || String(record.id);
};
