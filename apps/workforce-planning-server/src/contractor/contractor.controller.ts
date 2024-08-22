import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContractorService } from "./contractor.service";
import { ContractorControllerBase } from "./base/contractor.controller.base";

@swagger.ApiTags("contractors")
@common.Controller("contractors")
export class ContractorController extends ContractorControllerBase {
  constructor(protected readonly service: ContractorService) {
    super(service);
  }
}
