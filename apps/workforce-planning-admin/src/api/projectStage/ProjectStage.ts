import { ContractorAssignment } from "../contractorAssignment/ContractorAssignment";
import { PositionRequirement } from "../positionRequirement/PositionRequirement";
import { Project } from "../project/Project";

export type ProjectStage = {
  contractorAssignments?: Array<ContractorAssignment>;
  createdAt: Date;
  id: string;
  name: string | null;
  positionRequirements?: Array<PositionRequirement>;
  project?: Project | null;
  stageNumber: number | null;
  updatedAt: Date;
};
