import { TaskUpdateManyWithoutStatusesInput } from "./TaskUpdateManyWithoutStatusesInput";

export type StatusUpdateInput = {
  name?: string | null;
  tasks?: TaskUpdateManyWithoutStatusesInput;
};
