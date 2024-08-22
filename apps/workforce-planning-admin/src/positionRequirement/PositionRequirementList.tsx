import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PROJECTSTAGE_TITLE_FIELD } from "../projectStage/ProjectStageTitle";

export const PositionRequirementList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PositionRequirements"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
