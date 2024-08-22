/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProjectStageWhereUniqueInput } from "./ProjectStageWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProjectStageUpdateInput } from "./ProjectStageUpdateInput";

@ArgsType()
class UpdateProjectStageArgs {
  @ApiProperty({
    required: true,
    type: () => ProjectStageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjectStageWhereUniqueInput)
  @Field(() => ProjectStageWhereUniqueInput, { nullable: false })
  where!: ProjectStageWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProjectStageUpdateInput,
  })
  @ValidateNested()
  @Type(() => ProjectStageUpdateInput)
  @Field(() => ProjectStageUpdateInput, { nullable: false })
  data!: ProjectStageUpdateInput;
}

export { UpdateProjectStageArgs as UpdateProjectStageArgs };