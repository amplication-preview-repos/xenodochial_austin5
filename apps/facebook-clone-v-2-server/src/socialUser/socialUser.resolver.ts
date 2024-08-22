import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SocialUserResolverBase } from "./base/socialUser.resolver.base";
import { SocialUser } from "./base/SocialUser";
import { SocialUserService } from "./socialUser.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SocialUser)
export class SocialUserResolver extends SocialUserResolverBase {
  constructor(
    protected readonly service: SocialUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
