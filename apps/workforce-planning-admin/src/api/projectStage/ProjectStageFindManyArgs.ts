import { ProjectStageWhereInput } from "./ProjectStageWhereInput";
import { ProjectStageOrderByInput } from "./ProjectStageOrderByInput";

export type ProjectStageFindManyArgs = {
  where?: ProjectStageWhereInput;
  orderBy?: Array<ProjectStageOrderByInput>;
  skip?: number;
  take?: number;
};
