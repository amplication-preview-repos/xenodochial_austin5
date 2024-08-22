import { ContractorAssignmentListRelationFilter } from "../contractorAssignment/ContractorAssignmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PositionRequirementListRelationFilter } from "../positionRequirement/PositionRequirementListRelationFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProjectStageWhereInput = {
  contractorAssignments?: ContractorAssignmentListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  positionRequirements?: PositionRequirementListRelationFilter;
  project?: ProjectWhereUniqueInput;
  stageNumber?: IntNullableFilter;
};
