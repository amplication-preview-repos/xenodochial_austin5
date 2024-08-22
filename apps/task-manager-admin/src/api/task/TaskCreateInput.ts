import { CommentCreateNestedManyWithoutTasksInput } from "./CommentCreateNestedManyWithoutTasksInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { StatusWhereUniqueInput } from "../status/StatusWhereUniqueInput";

export type TaskCreateInput = {
  assignee?: string | null;
  comments?: CommentCreateNestedManyWithoutTasksInput;
  description?: string | null;
  project?: ProjectWhereUniqueInput | null;
  status?: StatusWhereUniqueInput | null;
  title?: string | null;
};
