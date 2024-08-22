import { Employee } from "../employee/Employee";
import { PositionRequirement } from "../positionRequirement/PositionRequirement";
import { Project } from "../project/Project";

export type EmployeeAssignment = {
  createdAt: Date;
  employee?: Employee | null;
  endDate: Date | null;
  id: string;
  loading: number | null;
  positionRequirement?: PositionRequirement | null;
  project?: Project | null;
  startDate: Date | null;
  updatedAt: Date;
};
