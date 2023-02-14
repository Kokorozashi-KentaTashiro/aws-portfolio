import { FC, ChangeEvent } from "react";

import Layout from "components/Layout";
import { TextField } from "@mui/material";
import { CommonContainer, CommonButton } from "common/commonMaterial";
import {
  setLastName,
  setFirstName,
  setEmail,
  setPhone,
} from "ducks/auth/slice";
import { useUserRegistHook } from "hooks/userRegistHook";

const UserRegist: FC = () => {
  // ReactHook
  const { dispatch, userInfo, onClickConfirm } = useUserRegistHook();

  // 仮想DOM
  return (
    <Layout>
      <CommonContainer>
        <TextField
          id="last-name"
          label="名前（姓）"
          variant="standard"
          value={userInfo.lastName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch(setLastName(e.target.value))
          }
        />
        <TextField
          id="first-name"
          label="名前（名）"
          variant="standard"
          value={userInfo.firstName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch(setFirstName(e.target.value))
          }
        />
        <TextField
          id="email"
          label="メールアドレス"
          variant="standard"
          value={userInfo.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch(setEmail(e.target.value))
          }
        />
        <TextField
          id="phone"
          label="電話番号"
          variant="standard"
          value={userInfo.phone}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch(setPhone(e.target.value))
          }
        />
        <CommonButton variant="contained" onClick={onClickConfirm}>
          確定
        </CommonButton>
      </CommonContainer>
    </Layout>
  );
};

export default UserRegist;
