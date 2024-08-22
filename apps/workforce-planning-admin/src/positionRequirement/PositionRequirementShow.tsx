import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { POSITIONREQUIREMENT_TITLE_FIELD } from "./PositionRequirementTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";
import { PROJECTSTAGE_TITLE_FIELD } from "../projectStage/ProjectStageTitle";

export const PositionRequirementShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="jobTitle" source="jobTitle" />
        <ReferenceField
          label="ProjectStage"
          source="projectstage.id"
          reference="ProjectStage"
        >
          <TextField source={PROJECTSTAGE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="quantity" source="quantity" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="EmployeeAssignment"
          target="positionRequirementId"
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
