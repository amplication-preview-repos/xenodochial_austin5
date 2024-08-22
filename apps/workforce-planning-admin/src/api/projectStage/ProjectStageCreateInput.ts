import { ContractorAssignmentCreateNestedManyWithoutProjectStagesInput } from "./ContractorAssignmentCreateNestedManyWithoutProjectStagesInput";
import { PositionRequirementCreateNestedManyWithoutProjectStagesInput } from "./PositionRequirementCreateNestedManyWithoutProjectStagesInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ProjectStageCreateInput = {
  contractorAssignments?: ContractorAssignmentCreateNestedManyWithoutProjectStagesInput;
  name?: string | null;
  positionRequirements?: PositionRequirementCreateNestedManyWithoutProjectStagesInput;
  project?: ProjectWhereUniqueInput | null;
  stageNumber?: number | null;
};
