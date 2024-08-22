import * as graphql from "@nestjs/graphql";
import { SocialService } from "./social.service";

export class SocialResolver {
  constructor(protected readonly service: SocialService) {}
}
