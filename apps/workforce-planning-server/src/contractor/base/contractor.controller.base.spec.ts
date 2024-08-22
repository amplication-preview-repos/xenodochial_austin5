import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ContractorController } from "../contractor.controller";
import { ContractorService } from "../contractor.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  contractEndDate: new Date(),
  contractStartDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  loading: 42.42,
  name: "exampleName",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  contractEndDate: new Date(),
  contractStartDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  loading: 42.42,
  name: "exampleName",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    contractEndDate: new Date(),
    contractStartDate: new Date(),
    createdAt: new Date(),
    id: "exampleId",
    loading: 42.42,
    name: "exampleName",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  contractEndDate: new Date(),
  contractStartDate: new Date(),
  createdAt: new Date(),
  id: "exampleId",
  loading: 42.42,
  name: "exampleName",
  updatedAt: new Date(),
};

const service = {
  createContractor() {
    return CREATE_RESULT;
  },
  contractors: () => FIND_MANY_RESULT,
  contractor: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Contractor", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ContractorService,
          useValue: service,
        },
      ],
      controllers: [ContractorController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /contractors", async () => {
    await request(app.getHttpServer())
      .post("/contractors")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        contractEndDate: CREATE_RESULT.contractEndDate.toISOString(),
        contractStartDate: CREATE_RESULT.contractStartDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /contractors", async () => {
    await request(app.getHttpServer())
      .get("/contractors")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          contractEndDate: FIND_MANY_RESULT[0].contractEndDate.toISOString(),
          contractStartDate:
            FIND_MANY_RESULT[0].contractStartDate.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /contractors/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contractors"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /contractors/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contractors"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        contractEndDate: FIND_ONE_RESULT.contractEndDate.toISOString(),
        contractStartDate: FIND_ONE_RESULT.contractStartDate.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /contractors existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/contractors")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        contractEndDate: CREATE_RESULT.contractEndDate.toISOString(),
        contractStartDate: CREATE_RESULT.contractStartDate.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/contractors")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});