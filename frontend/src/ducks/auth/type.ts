export type AuthState = {
  /** ログインユーザ情報 */
  loginInfo: LoginInfo;
  userInfo: UserInfo;
};


/** ログイン情報 */
export type LoginInfo = {
  userName: string;
};

/** ユーザ情報 */
export type UserInfo = {
  isAdmin: boolean;
  partitionKey: string;
  firstName: string;
  lastName: string;
  email: string;
  picture: string;
  deleteFlg: number;
};
