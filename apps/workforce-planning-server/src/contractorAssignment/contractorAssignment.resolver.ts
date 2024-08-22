import * as graphql from "@nestjs/graphql";
import { ContractorAssignmentResolverBase } from "./base/contractorAssignment.resolver.base";
import { ContractorAssignment } from "./base/ContractorAssignment";
import { ContractorAssignmentService } from "./contractorAssignment.service";

@graphql.Resolver(() => ContractorAssignment)
export class ContractorAssignmentResolver extends ContractorAssignmentResolverBase {
  constructor(protected readonly service: ContractorAssignmentService) {
    super(service);
  }
}
