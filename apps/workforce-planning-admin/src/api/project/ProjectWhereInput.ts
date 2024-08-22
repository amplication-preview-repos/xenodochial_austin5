import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeAssignmentListRelationFilter } from "../employeeAssignment/EmployeeAssignmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectStageListRelationFilter } from "../projectStage/ProjectStageListRelationFilter";

export type ProjectWhereInput = {
  country?: StringNullableFilter;
  employeeAssignments?: EmployeeAssignmentListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  projectStages?: ProjectStageListRelationFilter;
};
