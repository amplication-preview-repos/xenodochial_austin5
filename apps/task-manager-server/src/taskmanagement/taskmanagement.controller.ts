import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TaskManagementService } from "./taskmanagement.service";

@swagger.ApiTags("taskManagements")
@common.Controller("taskManagements")
export class TaskManagementController {
  constructor(protected readonly service: TaskManagementService) {}
}
