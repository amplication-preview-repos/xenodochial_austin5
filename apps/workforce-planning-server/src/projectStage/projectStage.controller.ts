import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProjectStageService } from "./projectStage.service";
import { ProjectStageControllerBase } from "./base/projectStage.controller.base";

@swagger.ApiTags("projectStages")
@common.Controller("projectStages")
export class ProjectStageController extends ProjectStageControllerBase {
  constructor(protected readonly service: ProjectStageService) {
    super(service);
  }
}
