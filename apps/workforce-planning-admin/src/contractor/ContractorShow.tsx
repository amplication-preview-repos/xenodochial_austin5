import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CONTRACTOR_TITLE_FIELD } from "./ContractorTitle";
import { PROJECTSTAGE_TITLE_FIELD } from "../projectStage/ProjectStageTitle";

export const ContractorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="contractEndDate" source="contractEndDate" />
        <TextField label="contractStartDate" source="contractStartDate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="loading" source="loading" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ContractorAssignment"
          target="contractorId"
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
      </SimpleShowLayout>
    </Show>
  );
};
