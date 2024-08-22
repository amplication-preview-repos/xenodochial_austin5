import { CommentUpdateManyWithoutTasksInput } from "./CommentUpdateManyWithoutTasksInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { StatusWhereUniqueInput } from "../status/StatusWhereUniqueInput";

export type TaskUpdateInput = {
  assignee?: string | null;
  comments?: CommentUpdateManyWithoutTasksInput;
  description?: string | null;
  project?: ProjectWhereUniqueInput | null;
  status?: StatusWhereUniqueInput | null;
  title?: string | null;
};
