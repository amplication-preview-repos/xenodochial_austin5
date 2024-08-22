import { Comment as TComment } from "../api/comment/Comment";

export const COMMENT_TITLE_FIELD = "createdBy";

export const CommentTitle = (record: TComment): string => {
  return record.createdBy?.toString() || String(record.id);
};
