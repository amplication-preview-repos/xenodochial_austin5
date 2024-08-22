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
import { TaskService } from "../task.service";
import { TaskCreateInput } from "./TaskCreateInput";
import { Task } from "./Task";
import { TaskFindManyArgs } from "./TaskFindManyArgs";
import { TaskWhereUniqueInput } from "./TaskWhereUniqueInput";
import { TaskUpdateInput } from "./TaskUpdateInput";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { CommentWhereUniqueInput } from "../../comment/base/CommentWhereUniqueInput";

export class TaskControllerBase {
  constructor(protected readonly service: TaskService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Task })
  async createTask(@common.Body() data: TaskCreateInput): Promise<Task> {
    return await this.service.createTask({
      data: {
        ...data,

        project: data.project
          ? {
              connect: data.project,
            }
          : undefined,

        status: data.status
          ? {
              connect: data.status,
            }
          : undefined,
      },
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
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Task] })
  @ApiNestedQuery(TaskFindManyArgs)
  async tasks(@common.Req() request: Request): Promise<Task[]> {
    const args = plainToClass(TaskFindManyArgs, request.query);
    return this.service.tasks({
      ...args,
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
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Task })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async task(
    @common.Param() params: TaskWhereUniqueInput
  ): Promise<Task | null> {
    const result = await this.service.task({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Task })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTask(
    @common.Param() params: TaskWhereUniqueInput,
    @common.Body() data: TaskUpdateInput
  ): Promise<Task | null> {
    try {
      return await this.service.updateTask({
        where: params,
        data: {
          ...data,

          project: data.project
            ? {
                connect: data.project,
              }
            : undefined,

          status: data.status
            ? {
                connect: data.status,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Task })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTask(
    @common.Param() params: TaskWhereUniqueInput
  ): Promise<Task | null> {
    try {
      return await this.service.deleteTask({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/comments")
  @ApiNestedQuery(CommentFindManyArgs)
  async findComments(
    @common.Req() request: Request,
    @common.Param() params: TaskWhereUniqueInput
  ): Promise<Comment[]> {
    const query = plainToClass(CommentFindManyArgs, request.query);
    const results = await this.service.findComments(params.id, {
      ...query,
      select: {
        content: true,
        createdAt: true,
        createdBy: true,
        id: true,

        task: {
          select: {
            id: true,
          },
        },

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

  @common.Post("/:id/comments")
  async connectComments(
    @common.Param() params: TaskWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        connect: body,
      },
    };
    await this.service.updateTask({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/comments")
  async updateComments(
    @common.Param() params: TaskWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        set: body,
      },
    };
    await this.service.updateTask({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/comments")
  async disconnectComments(
    @common.Param() params: TaskWhereUniqueInput,
    @common.Body() body: CommentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      comments: {
        disconnect: body,
      },
    };
    await this.service.updateTask({
      where: params,
      data,
      select: { id: true },
    });
  }
}