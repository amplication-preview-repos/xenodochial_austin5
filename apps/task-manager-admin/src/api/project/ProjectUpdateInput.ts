import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  description?: string | null;
  name?: string | null;
  tasks?: TaskUpdateManyWithoutProjectsInput;
};
