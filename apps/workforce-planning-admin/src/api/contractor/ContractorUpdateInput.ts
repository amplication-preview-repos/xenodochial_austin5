import { ContractorAssignmentUpdateManyWithoutContractorsInput } from "./ContractorAssignmentUpdateManyWithoutContractorsInput";

export type ContractorUpdateInput = {
  contractEndDate?: Date | null;
  contractStartDate?: Date | null;
  contractorAssignments?: ContractorAssignmentUpdateManyWithoutContractorsInput;
  loading?: number | null;
  name?: string | null;
};
