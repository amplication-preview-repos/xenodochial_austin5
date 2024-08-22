import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PositionRequirementServiceBase } from "./base/positionRequirement.service.base";

@Injectable()
export class PositionRequirementService extends PositionRequirementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
