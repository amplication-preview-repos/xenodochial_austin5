import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const RoleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" source="description" />
        <TextInput label="name" source="name" />
        <TextInput label="StaffUser" source="staffUser" />
      </SimpleForm>
    </Edit>
  );
};
