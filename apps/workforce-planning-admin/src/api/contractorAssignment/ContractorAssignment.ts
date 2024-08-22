import { Contractor } from "../contractor/Contractor";
import { ProjectStage } from "../projectStage/ProjectStage";

export type ContractorAssignment = {
  contractor?: Contractor | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  loading: number | null;
  projectStage?: ProjectStage | null;
  startDate: Date | null;
  updatedAt: Date;
};
