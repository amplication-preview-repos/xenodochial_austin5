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

import { ContractorTitle } from "../contractor/ContractorTitle";
import { ProjectStageTitle } from "../projectStage/ProjectStageTitle";

export const ContractorAssignmentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="contractor.id"
          reference="Contractor"
          label="Contractor"
        >
          <SelectInput optionText={ContractorTitle} />
        </ReferenceInput>
        <DateTimeInput label="endDate" source="endDate" />
        <NumberInput label="loading" source="loading" />
        <ReferenceInput
          source="projectStage.id"
          reference="ProjectStage"
          label="ProjectStage"
        >
          <SelectInput optionText={ProjectStageTitle} />
        </ReferenceInput>
        <DateTimeInput label="startDate" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};
