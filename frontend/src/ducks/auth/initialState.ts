import { AuthState } from "./type";
export const initialState: AuthState = {
  signInInfo: {
    email: "",
    password: "",
    userId: "",
    signInStatus: false,
  },
  signUpInfo: {
    userId: "",
    familiyName: "",
    givenName: "",
    email: "",
    phone: "",
    password: "",
    verifyCode: "",
    createStatus: false,
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
