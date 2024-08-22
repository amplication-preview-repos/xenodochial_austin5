import { ContractorAssignmentCreateNestedManyWithoutContractorsInput } from "./ContractorAssignmentCreateNestedManyWithoutContractorsInput";

export type ContractorCreateInput = {
  contractEndDate?: Date | null;
  contractStartDate?: Date | null;
  contractorAssignments?: ContractorAssignmentCreateNestedManyWithoutContractorsInput;
  loading?: number | null;
  name?: string | null;
};
