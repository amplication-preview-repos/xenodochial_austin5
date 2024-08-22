import { SocialUser as TSocialUser } from "../api/socialUser/SocialUser";

export const SOCIALUSER_TITLE_FIELD = "id";

export const SocialUserTitle = (record: TSocialUser): string => {
  return record.id?.toString() || String(record.id);
};
