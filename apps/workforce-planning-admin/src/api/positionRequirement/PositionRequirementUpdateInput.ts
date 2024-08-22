import { EmployeeAssignmentUpdateManyWithoutPositionRequirementsInput } from "./EmployeeAssignmentUpdateManyWithoutPositionRequirementsInput";
import { ProjectStageWhereUniqueInput } from "../projectStage/ProjectStageWhereUniqueInput";

export type PositionRequirementUpdateInput = {
  employeeAssignments?: EmployeeAssignmentUpdateManyWithoutPositionRequirementsInput;
  jobTitle?: string | null;
  projectStage?: ProjectStageWhereUniqueInput | null;
  quantity?: number | null;
};
