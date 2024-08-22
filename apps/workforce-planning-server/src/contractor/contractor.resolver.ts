import * as graphql from "@nestjs/graphql";
import { ContractorResolverBase } from "./base/contractor.resolver.base";
import { Contractor } from "./base/Contractor";
import { ContractorService } from "./contractor.service";

@graphql.Resolver(() => Contractor)
export class ContractorResolver extends ContractorResolverBase {
  constructor(protected readonly service: ContractorService) {
    super(service);
  }
}
