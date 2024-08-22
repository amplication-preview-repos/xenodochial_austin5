import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContractorServiceBase } from "./base/contractor.service.base";

@Injectable()
export class ContractorService extends ContractorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
