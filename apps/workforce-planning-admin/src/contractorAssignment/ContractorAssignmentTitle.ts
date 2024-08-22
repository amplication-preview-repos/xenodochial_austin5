import { ContractorAssignment as TContractorAssignment } from "../api/contractorAssignment/ContractorAssignment";

export const CONTRACTORASSIGNMENT_TITLE_FIELD = "id";

export const ContractorAssignmentTitle = (
  record: TContractorAssignment
): string => {
  return record.id?.toString() || String(record.id);
};
