import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SocialUserServiceBase } from "./base/socialUser.service.base";

@Injectable()
export class SocialUserService extends SocialUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
