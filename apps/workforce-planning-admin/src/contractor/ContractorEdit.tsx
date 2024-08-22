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

import { ContractorAssignmentTitle } from "../contractorAssignment/ContractorAssignmentTitle";

export const ContractorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="contractEndDate" source="contractEndDate" />
        <DateTimeInput label="contractStartDate" source="contractStartDate" />
        <ReferenceArrayInput
          source="contractorAssignments"
          reference="ContractorAssignment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContractorAssignmentTitle} />
        </ReferenceArrayInput>
        <NumberInput label="loading" source="loading" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
