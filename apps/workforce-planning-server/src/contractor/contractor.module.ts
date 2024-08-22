import { Module } from "@nestjs/common";
import { ContractorModuleBase } from "./base/contractor.module.base";
import { ContractorService } from "./contractor.service";
import { ContractorController } from "./contractor.controller";
import { ContractorResolver } from "./contractor.resolver";

@Module({
  imports: [ContractorModuleBase],
  controllers: [ContractorController],
  providers: [ContractorService, ContractorResolver],
  exports: [ContractorService],
})
export class ContractorModule {}
