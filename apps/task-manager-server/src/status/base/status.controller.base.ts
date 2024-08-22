/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { StatusService } from "../status.service";
import { StatusCreateInput } from "./StatusCreateInput";
import { Status } from "./Status";
import { StatusFindManyArgs } from "./StatusFindManyArgs";
import { StatusWhereUniqueInput } from "./StatusWhereUniqueInput";
import { StatusUpdateInput } from "./StatusUpdateInput";
import { TaskFindManyArgs } from "../../task/base/TaskFindManyArgs";
import { Task } from "../../task/base/Task";
import { TaskWhereUniqueInput } from "../../task/base/TaskWhereUniqueInput";

export class StatusControllerBase {
  constructor(protected readonly service: StatusService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Status })
  async createStatus(@common.Body() data: StatusCreateInput): Promise<Status> {
    return await this.service.createStatus({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Status] })
  @ApiNestedQuery(StatusFindManyArgs)
  async statuses(@common.Req() request: Request): Promise<Status[]> {
    const args = plainToClass(StatusFindManyArgs, request.query);
    return this.service.statuses({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Status })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async status(
    @common.Param() params: StatusWhereUniqueInput
  ): Promise<Status | null> {
    const result = await this.service.status({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Status })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateStatus(
    @common.Param() params: StatusWhereUniqueInput,
    @common.Body() data: StatusUpdateInput
  ): Promise<Status | null> {
    try {
      return await this.service.updateStatus({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Status })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteStatus(
    @common.Param() params: StatusWhereUniqueInput
  ): Promise<Status | null> {
    try {
      return await this.service.deleteStatus({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/tasks")
  @ApiNestedQuery(TaskFindManyArgs)
  async findTasks(
    @common.Req() request: Request,
    @common.Param() params: StatusWhereUniqueInput
  ): Promise<Task[]> {
    const query = plainToClass(TaskFindManyArgs, request.query);
    const results = await this.service.findTasks(params.id, {
      ...query,
      select: {
        assignee: true,
        createdAt: true,
        description: true,
        id: true,

        project: {
          select: {
            id: true,
          },
        },

        status: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/tasks")
  async connectTasks(
    @common.Param() params: StatusWhereUniqueInput,
    @common.Body() body: TaskWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tasks: {
        connect: body,
      },
    };
    await this.service.updateStatus({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/tasks")
  async updateTasks(
    @common.Param() params: StatusWhereUniqueInput,
    @common.Body() body: TaskWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tasks: {
        set: body,
      },
    };
    await this.service.updateStatus({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/tasks")
  async disconnectTasks(
    @common.Param() params: StatusWhereUniqueInput,
    @common.Body() body: TaskWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tasks: {
        disconnect: body,
      },
    };
    await this.service.updateStatus({
      where: params,
      data,
      select: { id: true },
    });
  }
}
