import { SocialUserWhereInput } from "./SocialUserWhereInput";
import { SocialUserOrderByInput } from "./SocialUserOrderByInput";

export type SocialUserFindManyArgs = {
  where?: SocialUserWhereInput;
  orderBy?: Array<SocialUserOrderByInput>;
  skip?: number;
  take?: number;
};
