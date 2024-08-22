import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { POSITIONREQUIREMENT_TITLE_FIELD } from "../positionRequirement/PositionRequirementTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const EmployeeAssignmentList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EmployeeAssignments"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="startDate" source="startDate" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
