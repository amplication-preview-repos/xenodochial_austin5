/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Employee as PrismaEmployee,
  EmployeeAssignment as PrismaEmployeeAssignment,
} from "@prisma/client";

export class EmployeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.EmployeeCountArgs, "select">): Promise<number> {
    return this.prisma.employee.count(args);
  }

  async employees(
    args: Prisma.EmployeeFindManyArgs
  ): Promise<PrismaEmployee[]> {
    return this.prisma.employee.findMany(args);
  }
  async employee(
    args: Prisma.EmployeeFindUniqueArgs
  ): Promise<PrismaEmployee | null> {
    return this.prisma.employee.findUnique(args);
  }
  async createEmployee(
    args: Prisma.EmployeeCreateArgs
  ): Promise<PrismaEmployee> {
    return this.prisma.employee.create(args);
  }
  async updateEmployee(
    args: Prisma.EmployeeUpdateArgs
  ): Promise<PrismaEmployee> {
    return this.prisma.employee.update(args);
  }
  async deleteEmployee(
    args: Prisma.EmployeeDeleteArgs
  ): Promise<PrismaEmployee> {
    return this.prisma.employee.delete(args);
  }

  async findEmployeeAssignments(
    parentId: string,
    args: Prisma.EmployeeAssignmentFindManyArgs
  ): Promise<PrismaEmployeeAssignment[]> {
    return this.prisma.employee
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .employeeAssignments(args);
  }
}
