import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContractorAssignmentService } from "./contractorAssignment.service";
import { ContractorAssignmentControllerBase } from "./base/contractorAssignment.controller.base";

@swagger.ApiTags("contractorAssignments")
@common.Controller("contractorAssignments")
export class ContractorAssignmentController extends ContractorAssignmentControllerBase {
  constructor(protected readonly service: ContractorAssignmentService) {
    super(service);
  }
}
