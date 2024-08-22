import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PermissionsService } from "./permissions.service";

@swagger.ApiTags("permissions")
@common.Controller("permissions")
export class PermissionsController {
  constructor(protected readonly service: PermissionsService) {}
}
