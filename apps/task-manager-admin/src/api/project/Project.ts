import { Task } from "../task/Task";

export type Project = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  tasks?: Array<Task>;
  updatedAt: Date;
};
