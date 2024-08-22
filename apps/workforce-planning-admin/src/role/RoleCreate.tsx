import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const RoleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" source="description" />
        <TextInput label="name" source="name" />
        <TextInput label="StaffUser" source="staffUser" />
      </SimpleForm>
    </Create>
  );
};