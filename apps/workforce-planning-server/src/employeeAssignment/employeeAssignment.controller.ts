import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeAssignmentService } from "./employeeAssignment.service";
import { EmployeeAssignmentControllerBase } from "./base/employeeAssignment.controller.base";

@swagger.ApiTags("employeeAssignments")
@common.Controller("employeeAssignments")
export class EmployeeAssignmentController extends EmployeeAssignmentControllerBase {
  constructor(protected readonly service: EmployeeAssignmentService) {
    super(service);
  }
}
