import { Module } from "@nestjs/common";
import { EmployeeAssignmentModuleBase } from "./base/employeeAssignment.module.base";
import { EmployeeAssignmentService } from "./employeeAssignment.service";
import { EmployeeAssignmentController } from "./employeeAssignment.controller";
import { EmployeeAssignmentResolver } from "./employeeAssignment.resolver";

@Module({
  imports: [EmployeeAssignmentModuleBase],
  controllers: [EmployeeAssignmentController],
  providers: [EmployeeAssignmentService, EmployeeAssignmentResolver],
  exports: [EmployeeAssignmentService],
})
export class EmployeeAssignmentModule {}
