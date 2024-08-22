import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PositionRequirementWhereUniqueInput } from "../positionRequirement/PositionRequirementWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type EmployeeAssignmentWhereInput = {
  employee?: EmployeeWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  loading?: FloatNullableFilter;
  positionRequirement?: PositionRequirementWhereUniqueInput;
  project?: ProjectWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
};
