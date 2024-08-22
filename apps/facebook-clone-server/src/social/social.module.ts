import { Module } from "@nestjs/common";
import { SocialService } from "./social.service";
import { SocialController } from "./social.controller";
import { SocialResolver } from "./social.resolver";

@Module({
  controllers: [SocialController],
  providers: [SocialService, SocialResolver],
  exports: [SocialService],
})
export class SocialModule {}
