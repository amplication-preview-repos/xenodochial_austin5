import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { EMPLOYEE_TITLE_FIELD } from "./EmployeeTitle";
import { POSITIONREQUIREMENT_TITLE_FIELD } from "../positionRequirement/PositionRequirementTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const EmployeeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="contractEndDate" source="contractEndDate" />
        <TextField label="contractStartDate" source="contractStartDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="loading" source="loading" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="EmployeeAssignment"
          target="employeeId"
          label="EmployeeAssignments"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Employee"
              source="employee.id"
              reference="Employee"
            >
              <TextField source={EMPLOYEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="endDate" source="endDate" />
            <TextField label="ID" source="id" />
            <TextField label="loading" source="loading" />
            <ReferenceField
              label="PositionRequirement"
              source="positionrequirement.id"
              reference="PositionRequirement"
            >
              <TextField source={POSITIONREQUIREMENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Project"
              source="project.id"
              reference="Project"
            >
              <TextField source={PROJECT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="startDate" source="startDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
