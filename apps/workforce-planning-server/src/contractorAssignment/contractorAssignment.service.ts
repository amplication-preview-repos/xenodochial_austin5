import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContractorAssignmentServiceBase } from "./base/contractorAssignment.service.base";

@Injectable()
export class ContractorAssignmentService extends ContractorAssignmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
