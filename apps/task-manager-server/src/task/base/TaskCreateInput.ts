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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { CommentCreateNestedManyWithoutTasksInput } from "./CommentCreateNestedManyWithoutTasksInput";
import { Type } from "class-transformer";
import { ProjectWhereUniqueInput } from "../../project/base/ProjectWhereUniqueInput";
import { StatusWhereUniqueInput } from "../../status/base/StatusWhereUniqueInput";

@InputType()
class TaskCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  assignee?: string | null;

  @ApiProperty({
    required: false,
    type: () => CommentCreateNestedManyWithoutTasksInput,
  })
  @ValidateNested()
  @Type(() => CommentCreateNestedManyWithoutTasksInput)
  @IsOptional()
  @Field(() => CommentCreateNestedManyWithoutTasksInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutTasksInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

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
  project?: ProjectWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => StatusWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StatusWhereUniqueInput)
  @IsOptional()
  @Field(() => StatusWhereUniqueInput, {
    nullable: true,
  })
  status?: StatusWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;
}

export { TaskCreateInput as TaskCreateInput };