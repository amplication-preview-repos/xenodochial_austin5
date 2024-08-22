import { Module } from "@nestjs/common";
import { PositionRequirementModuleBase } from "./base/positionRequirement.module.base";
import { PositionRequirementService } from "./positionRequirement.service";
import { PositionRequirementController } from "./positionRequirement.controller";
import { PositionRequirementResolver } from "./positionRequirement.resolver";

@Module({
  imports: [PositionRequirementModuleBase],
  controllers: [PositionRequirementController],
  providers: [PositionRequirementService, PositionRequirementResolver],
  exports: [PositionRequirementService],
})
export class PositionRequirementModule {}
