import { ProjectStage as TProjectStage } from "../api/projectStage/ProjectStage";

export const PROJECTSTAGE_TITLE_FIELD = "name";

export const ProjectStageTitle = (record: TProjectStage): string => {
  return record.name?.toString() || String(record.id);
};
