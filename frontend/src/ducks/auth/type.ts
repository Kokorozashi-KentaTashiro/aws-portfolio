export type AuthState = {
  signInInfo: SignInInfo;
  signUpInfo: SignUpInfo;
  userInfo: UserInfo;
};

/** SignIn情報 */
export type SignInInfo = {
  email: string;
  password: string;
  userId: string;
  signInStatus: boolean;
};

/** SignUp情報 */
export type SignUpInfo = {
  userId: string;
  familiyName: string;
  givenName: string;
  email: string;
  phone: string;
  password: string;
  verifyCode: string;
  createStatus: boolean;
};

/** ユーザ情報 */
export type UserInfo = {
  isAdmin: boolean;
  userId: string;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
};
