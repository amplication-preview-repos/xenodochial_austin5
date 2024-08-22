import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { ProjectStageList } from "./projectStage/ProjectStageList";
import { ProjectStageCreate } from "./projectStage/ProjectStageCreate";
import { ProjectStageEdit } from "./projectStage/ProjectStageEdit";
import { ProjectStageShow } from "./projectStage/ProjectStageShow";
import { ContractorAssignmentList } from "./contractorAssignment/ContractorAssignmentList";
import { ContractorAssignmentCreate } from "./contractorAssignment/ContractorAssignmentCreate";
import { ContractorAssignmentEdit } from "./contractorAssignment/ContractorAssignmentEdit";
import { ContractorAssignmentShow } from "./contractorAssignment/ContractorAssignmentShow";
import { EmployeeAssignmentList } from "./employeeAssignment/EmployeeAssignmentList";
import { EmployeeAssignmentCreate } from "./employeeAssignment/EmployeeAssignmentCreate";
import { EmployeeAssignmentEdit } from "./employeeAssignment/EmployeeAssignmentEdit";
import { EmployeeAssignmentShow } from "./employeeAssignment/EmployeeAssignmentShow";
import { PositionRequirementList } from "./positionRequirement/PositionRequirementList";
import { PositionRequirementCreate } from "./positionRequirement/PositionRequirementCreate";
import { PositionRequirementEdit } from "./positionRequirement/PositionRequirementEdit";
import { PositionRequirementShow } from "./positionRequirement/PositionRequirementShow";
import { ContractorList } from "./contractor/ContractorList";
import { ContractorCreate } from "./contractor/ContractorCreate";
import { ContractorEdit } from "./contractor/ContractorEdit";
import { ContractorShow } from "./contractor/ContractorShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"WorkforcePlanning"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="ProjectStage"
          list={ProjectStageList}
          edit={ProjectStageEdit}
          create={ProjectStageCreate}
          show={ProjectStageShow}
        />
        <Resource
          name="ContractorAssignment"
          list={ContractorAssignmentList}
          edit={ContractorAssignmentEdit}
          create={ContractorAssignmentCreate}
          show={ContractorAssignmentShow}
        />
        <Resource
          name="EmployeeAssignment"
          list={EmployeeAssignmentList}
          edit={EmployeeAssignmentEdit}
          create={EmployeeAssignmentCreate}
          show={EmployeeAssignmentShow}
        />
        <Resource
          name="PositionRequirement"
          list={PositionRequirementList}
          edit={PositionRequirementEdit}
          create={PositionRequirementCreate}
          show={PositionRequirementShow}
        />
        <Resource
          name="Contractor"
          list={ContractorList}
          edit={ContractorEdit}
          create={ContractorCreate}
          show={ContractorShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
