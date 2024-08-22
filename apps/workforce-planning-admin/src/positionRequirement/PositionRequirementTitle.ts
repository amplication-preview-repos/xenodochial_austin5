import { PositionRequirement as TPositionRequirement } from "../api/positionRequirement/PositionRequirement";

export const POSITIONREQUIREMENT_TITLE_FIELD = "jobTitle";

export const PositionRequirementTitle = (
  record: TPositionRequirement
): string => {
  return record.jobTitle?.toString() || String(record.id);
};
