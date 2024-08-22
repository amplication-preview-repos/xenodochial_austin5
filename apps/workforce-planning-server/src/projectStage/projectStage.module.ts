import { Module } from "@nestjs/common";
import { ProjectStageModuleBase } from "./base/projectStage.module.base";
import { ProjectStageService } from "./projectStage.service";
import { ProjectStageController } from "./projectStage.controller";
import { ProjectStageResolver } from "./projectStage.resolver";

@Module({
  imports: [ProjectStageModuleBase],
  controllers: [ProjectStageController],
  providers: [ProjectStageService, ProjectStageResolver],
  exports: [ProjectStageService],
})
export class ProjectStageModule {}
