import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ContractorAssignmentListRelationFilter } from "../contractorAssignment/ContractorAssignmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ContractorWhereInput = {
  contractEndDate?: DateTimeNullableFilter;
  contractStartDate?: DateTimeNullableFilter;
  contractorAssignments?: ContractorAssignmentListRelationFilter;
  id?: StringFilter;
  loading?: FloatNullableFilter;
  name?: StringNullableFilter;
};
