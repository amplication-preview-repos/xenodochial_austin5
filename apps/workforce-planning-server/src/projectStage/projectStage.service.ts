import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProjectStageServiceBase } from "./base/projectStage.service.base";

@Injectable()
export class ProjectStageService extends ProjectStageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
