import { ContractorWhereInput } from "./ContractorWhereInput";
import { ContractorOrderByInput } from "./ContractorOrderByInput";

export type ContractorFindManyArgs = {
  where?: ContractorWhereInput;
  orderBy?: Array<ContractorOrderByInput>;
  skip?: number;
  take?: number;
};
