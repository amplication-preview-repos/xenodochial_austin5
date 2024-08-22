/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContractorAssignmentListRelationFilter } from "../../contractorAssignment/base/ContractorAssignmentListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PositionRequirementListRelationFilter } from "../../positionRequirement/base/PositionRequirementListRelationFilter";
import { ProjectWhereUniqueInput } from "../../project/base/ProjectWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

@InputType()
class ProjectStageWhereInput {
  @ApiProperty({
    required: false,
    type: () => ContractorAssignmentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ContractorAssignmentListRelationFilter)
  @IsOptional()
  @Field(() => ContractorAssignmentListRelationFilter, {
    nullable: true,
  })
  contractorAssignments?: ContractorAssignmentListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => PositionRequirementListRelationFilter,
  })
  @ValidateNested()
  @Type(() => PositionRequirementListRelationFilter)
  @IsOptional()
  @Field(() => PositionRequirementListRelationFilter, {
    nullable: true,
  })
  positionRequirements?: PositionRequirementListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjectWhereUniqueInput)
  @IsOptional()
  @Field(() => ProjectWhereUniqueInput, {
    nullable: true,
  })
  project?: ProjectWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  stageNumber?: IntNullableFilter;
}

export { ProjectStageWhereInput as ProjectStageWhereInput };
