import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeAssignmentServiceBase } from "./base/employeeAssignment.service.base";

@Injectable()
export class EmployeeAssignmentService extends EmployeeAssignmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
