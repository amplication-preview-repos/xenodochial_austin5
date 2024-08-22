import { ContractorAssignment } from "../contractorAssignment/ContractorAssignment";

export type Contractor = {
  contractEndDate: Date | null;
  contractStartDate: Date | null;
  contractorAssignments?: Array<ContractorAssignment>;
  createdAt: Date;
  id: string;
  loading: number | null;
  name: string | null;
  updatedAt: Date;
};
