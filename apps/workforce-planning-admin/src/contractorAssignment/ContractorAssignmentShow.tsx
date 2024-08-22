import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CONTRACTOR_TITLE_FIELD } from "../contractor/ContractorTitle";
import { PROJECTSTAGE_TITLE_FIELD } from "../projectStage/ProjectStageTitle";

export const ContractorAssignmentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
