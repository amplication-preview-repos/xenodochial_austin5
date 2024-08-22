import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SocialUserService } from "./socialUser.service";
import { SocialUserControllerBase } from "./base/socialUser.controller.base";

@swagger.ApiTags("socialUsers")
@common.Controller("socialUsers")
export class SocialUserController extends SocialUserControllerBase {
  constructor(
    protected readonly service: SocialUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
