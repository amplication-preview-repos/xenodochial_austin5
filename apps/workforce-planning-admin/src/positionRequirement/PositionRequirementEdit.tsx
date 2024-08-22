import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { EmployeeAssignmentTitle } from "../employeeAssignment/EmployeeAssignmentTitle";
import { ProjectStageTitle } from "../projectStage/ProjectStageTitle";

export const PositionRequirementEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="employeeAssignments"
          reference="EmployeeAssignment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeAssignmentTitle} />
        </ReferenceArrayInput>
        <TextInput label="jobTitle" source="jobTitle" />
        <ReferenceInput
          source="projectStage.id"
          reference="ProjectStage"
          label="ProjectStage"
        >
          <SelectInput optionText={ProjectStageTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="quantity" source="quantity" />
      </SimpleForm>
    </Edit>
  );
};
