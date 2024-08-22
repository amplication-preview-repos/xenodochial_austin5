import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SocialService } from "./social.service";

@swagger.ApiTags("socials")
@common.Controller("socials")
export class SocialController {
  constructor(protected readonly service: SocialService) {}
}
