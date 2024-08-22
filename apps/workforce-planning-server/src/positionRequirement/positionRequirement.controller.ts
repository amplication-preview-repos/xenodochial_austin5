import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PositionRequirementService } from "./positionRequirement.service";
import { PositionRequirementControllerBase } from "./base/positionRequirement.controller.base";

@swagger.ApiTags("positionRequirements")
@common.Controller("positionRequirements")
export class PositionRequirementController extends PositionRequirementControllerBase {
  constructor(protected readonly service: PositionRequirementService) {
    super(service);
  }
}
