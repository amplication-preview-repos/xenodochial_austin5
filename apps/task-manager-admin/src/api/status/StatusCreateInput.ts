import { TaskCreateNestedManyWithoutStatusesInput } from "./TaskCreateNestedManyWithoutStatusesInput";

export type StatusCreateInput = {
  name?: string | null;
  tasks?: TaskCreateNestedManyWithoutStatusesInput;
};
