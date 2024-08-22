import { Module } from "@nestjs/common";
import { EmployeeModule } from "./employee/employee.module";
import { ProjectModule } from "./project/project.module";
import { ProjectStageModule } from "./projectStage/projectStage.module";
import { ContractorAssignmentModule } from "./contractorAssignment/contractorAssignment.module";
import { EmployeeAssignmentModule } from "./employeeAssignment/employeeAssignment.module";
import { PositionRequirementModule } from "./positionRequirement/positionRequirement.module";
import { ContractorModule } from "./contractor/contractor.module";
import { RoleModule } from "./role/role.module";
import { PermissionsModule } from "./permissions/permissions.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    EmployeeModule,
    ProjectModule,
    ProjectStageModule,
    ContractorAssignmentModule,
    EmployeeAssignmentModule,
    PositionRequirementModule,
    ContractorModule,
    RoleModule,
    PermissionsModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
