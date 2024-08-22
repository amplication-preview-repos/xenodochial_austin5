import { EmployeeAssignment } from "../employeeAssignment/EmployeeAssignment";
import { ProjectStage } from "../projectStage/ProjectStage";

export type Project = {
  country: string | null;
  createdAt: Date;
  employeeAssignments?: Array<EmployeeAssignment>;
  id: string;
  name: string | null;
  projectStages?: Array<ProjectStage>;
  updatedAt: Date;
};
