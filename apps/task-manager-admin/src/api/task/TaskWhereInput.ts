import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { StatusWhereUniqueInput } from "../status/StatusWhereUniqueInput";

export type TaskWhereInput = {
  assignee?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  status?: StatusWhereUniqueInput;
  title?: StringNullableFilter;
};
