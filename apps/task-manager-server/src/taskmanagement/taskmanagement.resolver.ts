import * as graphql from "@nestjs/graphql";
import { TaskManagementService } from "./taskmanagement.service";

export class TaskManagementResolver {
  constructor(protected readonly service: TaskManagementService) {}
}
