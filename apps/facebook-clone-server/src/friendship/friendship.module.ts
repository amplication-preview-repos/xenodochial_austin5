import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FriendshipModuleBase } from "./base/friendship.module.base";
import { FriendshipService } from "./friendship.service";
import { FriendshipController } from "./friendship.controller";
import { FriendshipResolver } from "./friendship.resolver";

@Module({
  imports: [FriendshipModuleBase, forwardRef(() => AuthModule)],
  controllers: [FriendshipController],
  providers: [FriendshipService, FriendshipResolver],
  exports: [FriendshipService],
})
export class FriendshipModule {}
