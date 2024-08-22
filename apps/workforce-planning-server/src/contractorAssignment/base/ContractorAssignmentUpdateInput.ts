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
import { ContractorWhereUniqueInput } from "../../contractor/base/ContractorWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsNumber,
  Min,
  Max,
} from "class-validator";
import { Type } from "class-transformer";
import { ProjectStageWhereUniqueInput } from "../../projectStage/base/ProjectStageWhereUniqueInput";

@InputType()
class ContractorAssignmentUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ContractorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContractorWhereUniqueInput)
  @IsOptional()
  @Field(() => ContractorWhereUniqueInput, {
    nullable: true,
  })
  contractor?: ContractorWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  loading?: number | null;

  @ApiProperty({
    required: false,
    type: () => ProjectStageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjectStageWhereUniqueInput)
  @IsOptional()
  @Field(() => ProjectStageWhereUniqueInput, {
    nullable: true,
  })
  projectStage?: ProjectStageWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;
}

export { ContractorAssignmentUpdateInput as ContractorAssignmentUpdateInput };