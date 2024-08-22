import { PositionRequirementWhereInput } from "./PositionRequirementWhereInput";
import { PositionRequirementOrderByInput } from "./PositionRequirementOrderByInput";

export type PositionRequirementFindManyArgs = {
  where?: PositionRequirementWhereInput;
  orderBy?: Array<PositionRequirementOrderByInput>;
  skip?: number;
  take?: number;
};
