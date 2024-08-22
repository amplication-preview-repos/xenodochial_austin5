import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { POSITIONREQUIREMENT_TITLE_FIELD } from "../positionRequirement/PositionRequirementTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const EmployeeAssignmentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="startDate" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
