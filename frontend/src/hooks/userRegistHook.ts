import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "app/store";
import { selectUserInfo, fetchAsyncPutUserInfo } from "ducks/auth/slice";
import { UserInfo } from "ducks/auth/type";

export const useUserRegistHook = () => {
  // 変数
  const dispatch = useDispatch<AppDispatch>();
  const userInfo: UserInfo = useSelector(selectUserInfo);

  // 関数
  const onClickConfirm = () => {
    dispatch(fetchAsyncPutUserInfo(userInfo));
  };

  return {
    dispatch,
    userInfo,
    onClickConfirm,
  };
};
