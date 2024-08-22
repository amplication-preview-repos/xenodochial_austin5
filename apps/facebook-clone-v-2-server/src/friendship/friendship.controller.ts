import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FriendshipService } from "./friendship.service";
import { FriendshipControllerBase } from "./base/friendship.controller.base";

@swagger.ApiTags("friendships")
@common.Controller("friendships")
export class FriendshipController extends FriendshipControllerBase {
  constructor(
    protected readonly service: FriendshipService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
