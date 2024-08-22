import { EmployeeAssignmentListRelationFilter } from "../employeeAssignment/EmployeeAssignmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectStageWhereUniqueInput } from "../projectStage/ProjectStageWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PositionRequirementWhereInput = {
  employeeAssignments?: EmployeeAssignmentListRelationFilter;
  id?: StringFilter;
  jobTitle?: StringNullableFilter;
  projectStage?: ProjectStageWhereUniqueInput;
  quantity?: IntNullableFilter;
};
