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

import { CONTRACTOR_TITLE_FIELD } from "../contractor/ContractorTitle";
import { PROJECTSTAGE_TITLE_FIELD } from "./ProjectStageTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const ProjectStageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <ReferenceField label="Project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="stageNumber" source="stageNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ContractorAssignment"
          target="projectStageId"
          label="ContractorAssignments"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Contractor"
              source="contractor.id"
              reference="Contractor"
            >
              <TextField source={CONTRACTOR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="endDate" source="endDate" />
            <TextField label="ID" source="id" />
            <TextField label="loading" source="loading" />
            <ReferenceField
              label="ProjectStage"
              source="projectstage.id"
              reference="ProjectStage"
            >
              <TextField source={PROJECTSTAGE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="startDate" source="startDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PositionRequirement"
          target="projectStageId"
          label="PositionRequirements"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
