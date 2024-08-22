/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { SocialUser } from "./SocialUser";
import { SocialUserCountArgs } from "./SocialUserCountArgs";
import { SocialUserFindManyArgs } from "./SocialUserFindManyArgs";
import { SocialUserFindUniqueArgs } from "./SocialUserFindUniqueArgs";
import { DeleteSocialUserArgs } from "./DeleteSocialUserArgs";
import { SocialUserService } from "../socialUser.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SocialUser)
export class SocialUserResolverBase {
  constructor(
    protected readonly service: SocialUserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SocialUser",
    action: "read",
    possession: "any",
  })
  async _socialUsersMeta(
    @graphql.Args() args: SocialUserCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SocialUser])
  @nestAccessControl.UseRoles({
    resource: "SocialUser",
    action: "read",
    possession: "any",
  })
  async socialUsers(
    @graphql.Args() args: SocialUserFindManyArgs
  ): Promise<SocialUser[]> {
    return this.service.socialUsers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SocialUser, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SocialUser",
    action: "read",
    possession: "own",
  })
  async socialUser(
    @graphql.Args() args: SocialUserFindUniqueArgs
  ): Promise<SocialUser | null> {
    const result = await this.service.socialUser(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SocialUser)
  @nestAccessControl.UseRoles({
    resource: "SocialUser",
    action: "delete",
    possession: "any",
  })
  async deleteSocialUser(
    @graphql.Args() args: DeleteSocialUserArgs
  ): Promise<SocialUser | null> {
    try {
      return await this.service.deleteSocialUser(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}