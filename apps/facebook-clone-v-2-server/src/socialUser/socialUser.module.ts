import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SocialUserModuleBase } from "./base/socialUser.module.base";
import { SocialUserService } from "./socialUser.service";
import { SocialUserController } from "./socialUser.controller";
import { SocialUserResolver } from "./socialUser.resolver";

@Module({
  imports: [SocialUserModuleBase, forwardRef(() => AuthModule)],
  controllers: [SocialUserController],
  providers: [SocialUserService, SocialUserResolver],
  exports: [SocialUserService],
})
export class SocialUserModule {}
