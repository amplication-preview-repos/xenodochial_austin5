import { EmployeeAssignmentCreateNestedManyWithoutProjectsInput } from "./EmployeeAssignmentCreateNestedManyWithoutProjectsInput";
import { ProjectStageCreateNestedManyWithoutProjectsInput } from "./ProjectStageCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  country?: string | null;
  employeeAssignments?: EmployeeAssignmentCreateNestedManyWithoutProjectsInput;
  name?: string | null;
  projectStages?: ProjectStageCreateNestedManyWithoutProjectsInput;
};
