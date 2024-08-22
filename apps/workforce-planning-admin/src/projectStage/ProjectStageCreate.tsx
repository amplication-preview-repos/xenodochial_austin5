import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ContractorAssignmentTitle } from "../contractorAssignment/ContractorAssignmentTitle";
import { PositionRequirementTitle } from "../positionRequirement/PositionRequirementTitle";
import { ProjectTitle } from "../project/ProjectTitle";

export const ProjectStageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="contractorAssignments"
          reference="ContractorAssignment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContractorAssignmentTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="positionRequirements"
          reference="PositionRequirement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PositionRequirementTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="stageNumber" source="stageNumber" />
      </SimpleForm>
    </Create>
  );
};
