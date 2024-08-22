import { TaskCreateNestedManyWithoutProjectsInput } from "./TaskCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  description?: string | null;
  name?: string | null;
  tasks?: TaskCreateNestedManyWithoutProjectsInput;
};
