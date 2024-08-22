import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { PositionRequirementWhereUniqueInput } from "../positionRequirement/PositionRequirementWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type EmployeeAssignmentUpdateInput = {
  employee?: EmployeeWhereUniqueInput | null;
  endDate?: Date | null;
  loading?: number | null;
  positionRequirement?: PositionRequirementWhereUniqueInput | null;
  project?: ProjectWhereUniqueInput | null;
  startDate?: Date | null;
};
