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
import { Friendship } from "./Friendship";
import { FriendshipCountArgs } from "./FriendshipCountArgs";
import { FriendshipFindManyArgs } from "./FriendshipFindManyArgs";
import { FriendshipFindUniqueArgs } from "./FriendshipFindUniqueArgs";
import { DeleteFriendshipArgs } from "./DeleteFriendshipArgs";
import { FriendshipService } from "../friendship.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Friendship)
export class FriendshipResolverBase {
  constructor(
    protected readonly service: FriendshipService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Friendship",
    action: "read",
    possession: "any",
  })
  async _friendshipsMeta(
    @graphql.Args() args: FriendshipCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Friendship])
  @nestAccessControl.UseRoles({
    resource: "Friendship",
    action: "read",
    possession: "any",
  })
  async friendships(
    @graphql.Args() args: FriendshipFindManyArgs
  ): Promise<Friendship[]> {
    return this.service.friendships(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Friendship, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Friendship",
    action: "read",
    possession: "own",
  })
  async friendship(
    @graphql.Args() args: FriendshipFindUniqueArgs
  ): Promise<Friendship | null> {
    const result = await this.service.friendship(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Friendship)
  @nestAccessControl.UseRoles({
    resource: "Friendship",
    action: "delete",
    possession: "any",
  })
  async deleteFriendship(
    @graphql.Args() args: DeleteFriendshipArgs
  ): Promise<Friendship | null> {
    try {
      return await this.service.deleteFriendship(args);
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