import { AuthState } from "./type";
export const initialState: AuthState = {
  loginInfo: {
    userId: "",
    userInfoStatus: false,
  },

  userInfo: {
    isAdmin: false,
    userId: "",
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
  },
};
