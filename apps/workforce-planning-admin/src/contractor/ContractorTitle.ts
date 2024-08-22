import { Contractor as TContractor } from "../api/contractor/Contractor";

export const CONTRACTOR_TITLE_FIELD = "name";

export const ContractorTitle = (record: TContractor): string => {
  return record.name?.toString() || String(record.id);
};
