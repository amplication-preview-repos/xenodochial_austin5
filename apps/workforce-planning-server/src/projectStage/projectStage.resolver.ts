import * as graphql from "@nestjs/graphql";
import { ProjectStageResolverBase } from "./base/projectStage.resolver.base";
import { ProjectStage } from "./base/ProjectStage";
import { ProjectStageService } from "./projectStage.service";

@graphql.Resolver(() => ProjectStage)
export class ProjectStageResolver extends ProjectStageResolverBase {
  constructor(protected readonly service: ProjectStageService) {
    super(service);
  }
}
