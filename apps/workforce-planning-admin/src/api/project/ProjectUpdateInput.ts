import { EmployeeAssignmentUpdateManyWithoutProjectsInput } from "./EmployeeAssignmentUpdateManyWithoutProjectsInput";
import { ProjectStageUpdateManyWithoutProjectsInput } from "./ProjectStageUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  country?: string | null;
  employeeAssignments?: EmployeeAssignmentUpdateManyWithoutProjectsInput;
  name?: string | null;
  projectStages?: ProjectStageUpdateManyWithoutProjectsInput;
};
