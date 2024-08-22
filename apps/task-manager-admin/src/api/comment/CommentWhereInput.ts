import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type CommentWhereInput = {
  content?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  id?: StringFilter;
  task?: TaskWhereUniqueInput;
};
