import { EmployeeAssignment } from "../employeeAssignment/EmployeeAssignment";
import { ProjectStage } from "../projectStage/ProjectStage";

export type PositionRequirement = {
  createdAt: Date;
  employeeAssignments?: Array<EmployeeAssignment>;
  id: string;
  jobTitle: string | null;
  projectStage?: ProjectStage | null;
  quantity: number | null;
  updatedAt: Date;
};
