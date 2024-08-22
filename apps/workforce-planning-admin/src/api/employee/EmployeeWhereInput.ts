import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmployeeAssignmentListRelationFilter } from "../employeeAssignment/EmployeeAssignmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EmployeeWhereInput = {
  contractEndDate?: DateTimeNullableFilter;
  contractStartDate?: DateTimeNullableFilter;
  employeeAssignments?: EmployeeAssignmentListRelationFilter;
  id?: StringFilter;
  loading?: FloatNullableFilter;
  name?: StringNullableFilter;
};
