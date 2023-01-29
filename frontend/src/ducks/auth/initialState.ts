import { AuthState } from "./type";
export const initialState: AuthState = {
  loginInfo: {
    userName: "",
  },

  userInfo: {
    isAdmin: false,
    partitionKey: "",
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
    deleteFlg: 0,
  },
};
