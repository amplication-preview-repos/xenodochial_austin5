import { ContractorAssignmentUpdateManyWithoutProjectStagesInput } from "./ContractorAssignmentUpdateManyWithoutProjectStagesInput";
import { PositionRequirementUpdateManyWithoutProjectStagesInput } from "./PositionRequirementUpdateManyWithoutProjectStagesInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type ProjectStageUpdateInput = {
  contractorAssignments?: ContractorAssignmentUpdateManyWithoutProjectStagesInput;
  name?: string | null;
  positionRequirements?: PositionRequirementUpdateManyWithoutProjectStagesInput;
  project?: ProjectWhereUniqueInput | null;
  stageNumber?: number | null;
};
