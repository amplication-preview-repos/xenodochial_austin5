import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  createdBy?: string | null;
  task?: TaskWhereUniqueInput | null;
};
