import { ContractorWhereUniqueInput } from "../contractor/ContractorWhereUniqueInput";
import { ProjectStageWhereUniqueInput } from "../projectStage/ProjectStageWhereUniqueInput";

export type ContractorAssignmentUpdateInput = {
  contractor?: ContractorWhereUniqueInput | null;
  endDate?: Date | null;
  loading?: number | null;
  projectStage?: ProjectStageWhereUniqueInput | null;
  startDate?: Date | null;
};
