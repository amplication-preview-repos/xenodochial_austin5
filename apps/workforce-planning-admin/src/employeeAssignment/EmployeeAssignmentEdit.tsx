import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { EmployeeTitle } from "../employee/EmployeeTitle";
import { PositionRequirementTitle } from "../positionRequirement/PositionRequirementTitle";
import { ProjectTitle } from "../project/ProjectTitle";

export const EmployeeAssignmentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="Employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <DateTimeInput label="endDate" source="endDate" />
        <NumberInput label="loading" source="loading" />
        <ReferenceInput
          source="positionRequirement.id"
          reference="PositionRequirement"
          label="PositionRequirement"
        >
          <SelectInput optionText={PositionRequirementTitle} />
        </ReferenceInput>
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <DateTimeInput label="startDate" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};