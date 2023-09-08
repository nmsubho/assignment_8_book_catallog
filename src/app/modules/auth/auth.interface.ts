import { ENUM_USER_ROLE } from '../../../enums/user';

export type ICredentials = {
  email: string;
  password: string;
};

export type ILoggedInUserResponse = {
  token: string;
  refreshToken?: string;
  needPasswordChange?: boolean;
};

export type IRefreshTokenResponse = {
  token: string;
};

export type IVerifiedLoggedInUser = {
  userId: string;
  role: ENUM_USER_ROLE;
};

export type IChangePassword = {
  password: string;
  newPassword: string;
};
