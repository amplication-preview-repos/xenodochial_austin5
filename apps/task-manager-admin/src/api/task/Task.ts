import { Comment } from "../comment/Comment";
import { Project } from "../project/Project";
import { Status } from "../status/Status";

export type Task = {
  assignee: string | null;
  comments?: Array<Comment>;
  createdAt: Date;
  description: string | null;
  id: string;
  project?: Project | null;
  status?: Status | null;
  title: string | null;
  updatedAt: Date;
};
