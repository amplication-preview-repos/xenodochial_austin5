import * as graphql from "@nestjs/graphql";
import { PositionRequirementResolverBase } from "./base/positionRequirement.resolver.base";
import { PositionRequirement } from "./base/PositionRequirement";
import { PositionRequirementService } from "./positionRequirement.service";

@graphql.Resolver(() => PositionRequirement)
export class PositionRequirementResolver extends PositionRequirementResolverBase {
  constructor(protected readonly service: PositionRequirementService) {
    super(service);
  }
}
