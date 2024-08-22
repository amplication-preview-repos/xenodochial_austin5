import { Task } from "../task/Task";

export type Comment = {
  content: string | null;
  createdAt: Date;
  createdBy: string | null;
  id: string;
  task?: Task | null;
  updatedAt: Date;
};
