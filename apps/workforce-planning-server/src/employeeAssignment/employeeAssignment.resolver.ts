import * as graphql from "@nestjs/graphql";
import { EmployeeAssignmentResolverBase } from "./base/employeeAssignment.resolver.base";
import { EmployeeAssignment } from "./base/EmployeeAssignment";
import { EmployeeAssignmentService } from "./employeeAssignment.service";

@graphql.Resolver(() => EmployeeAssignment)
export class EmployeeAssignmentResolver extends EmployeeAssignmentResolverBase {
  constructor(protected readonly service: EmployeeAssignmentService) {
    super(service);
  }
}
