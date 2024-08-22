import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EmployeeAssignmentTitle } from "../employeeAssignment/EmployeeAssignmentTitle";
import { ProjectStageTitle } from "../projectStage/ProjectStageTitle";

export const ProjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="country" source="country" />
        <ReferenceArrayInput
          source="employeeAssignments"
          reference="EmployeeAssignment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeAssignmentTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="projectStages"
          reference="ProjectStage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProjectStageTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
