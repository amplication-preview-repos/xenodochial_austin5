import { EmployeeAssignmentCreateNestedManyWithoutPositionRequirementsInput } from "./EmployeeAssignmentCreateNestedManyWithoutPositionRequirementsInput";
import { ProjectStageWhereUniqueInput } from "../projectStage/ProjectStageWhereUniqueInput";

export type PositionRequirementCreateInput = {
  employeeAssignments?: EmployeeAssignmentCreateNestedManyWithoutPositionRequirementsInput;
  jobTitle?: string | null;
  projectStage?: ProjectStageWhereUniqueInput | null;
  quantity?: number | null;
};
