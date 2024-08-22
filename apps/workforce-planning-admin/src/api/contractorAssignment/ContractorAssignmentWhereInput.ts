import { ContractorWhereUniqueInput } from "../contractor/ContractorWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProjectStageWhereUniqueInput } from "../projectStage/ProjectStageWhereUniqueInput";

export type ContractorAssignmentWhereInput = {
  contractor?: ContractorWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  loading?: FloatNullableFilter;
  projectStage?: ProjectStageWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
};
