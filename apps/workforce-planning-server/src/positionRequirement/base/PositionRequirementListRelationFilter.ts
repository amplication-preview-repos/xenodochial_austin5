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
import { PositionRequirementWhereInput } from "./PositionRequirementWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PositionRequirementListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PositionRequirementWhereInput,
  })
  @ValidateNested()
  @Type(() => PositionRequirementWhereInput)
  @IsOptional()
  @Field(() => PositionRequirementWhereInput, {
    nullable: true,
  })
  every?: PositionRequirementWhereInput;

  @ApiProperty({
    required: false,
    type: () => PositionRequirementWhereInput,
  })
  @ValidateNested()
  @Type(() => PositionRequirementWhereInput)
  @IsOptional()
  @Field(() => PositionRequirementWhereInput, {
    nullable: true,
  })
  some?: PositionRequirementWhereInput;

  @ApiProperty({
    required: false,
    type: () => PositionRequirementWhereInput,
  })
  @ValidateNested()
  @Type(() => PositionRequirementWhereInput)
  @IsOptional()
  @Field(() => PositionRequirementWhereInput, {
    nullable: true,
  })
  none?: PositionRequirementWhereInput;
}
export { PositionRequirementListRelationFilter as PositionRequirementListRelationFilter };