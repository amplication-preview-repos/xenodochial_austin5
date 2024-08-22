import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  createdBy?: string | null;
  task?: TaskWhereUniqueInput | null;
};
