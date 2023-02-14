export type AuthState = {
  /** ログインユーザ情報 */
  loginInfo: LoginInfo;
  userInfo: UserInfo;
};

/** ログイン情報 */
export type LoginInfo = {
  userId: string;
  userInfoStatus: boolean;
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
