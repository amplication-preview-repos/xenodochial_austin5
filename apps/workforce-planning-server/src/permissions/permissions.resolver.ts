import * as graphql from "@nestjs/graphql";
import { PermissionsService } from "./permissions.service";

export class PermissionsResolver {
  constructor(protected readonly service: PermissionsService) {}
}
