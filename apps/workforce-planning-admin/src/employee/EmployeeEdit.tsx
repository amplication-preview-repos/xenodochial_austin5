import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { EmployeeAssignmentTitle } from "../employeeAssignment/EmployeeAssignmentTitle";

export const EmployeeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="contractEndDate" source="contractEndDate" />
        <DateTimeInput label="contractStartDate" source="contractStartDate" />
        <ReferenceArrayInput
          source="employeeAssignments"
          reference="EmployeeAssignment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmployeeAssignmentTitle} />
        </ReferenceArrayInput>
        <NumberInput label="loading" source="loading" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
