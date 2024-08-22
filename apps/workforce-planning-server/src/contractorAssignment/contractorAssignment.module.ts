import { Module } from "@nestjs/common";
import { ContractorAssignmentModuleBase } from "./base/contractorAssignment.module.base";
import { ContractorAssignmentService } from "./contractorAssignment.service";
import { ContractorAssignmentController } from "./contractorAssignment.controller";
import { ContractorAssignmentResolver } from "./contractorAssignment.resolver";

@Module({
  imports: [ContractorAssignmentModuleBase],
  controllers: [ContractorAssignmentController],
  providers: [ContractorAssignmentService, ContractorAssignmentResolver],
  exports: [ContractorAssignmentService],
})
export class ContractorAssignmentModule {}
