import { FC } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Auth } from "aws-amplify";

import { Grid } from "@mui/material";
import {
  CommonContainer,
  CommonBox,
  CommonButton,
} from "common/commonMaterial";

import Layout from "../components/Layout";
import { selectLoginInfo } from "ducks/auth/slice";

const Home: FC = () => {
  // Redux変数
  const loginInfo = useSelector(selectLoginInfo);

  // レンダリング時の処理
  useEffect(() => {}, [loginInfo]);

  // 仮想DOM
  return (
    <>
      <Layout>
        <CommonContainer maxWidth="lg">
          <CommonBox>
            <Grid item xs={6}>
              ユーザー名: {loginInfo.userId}
            </Grid>
            <CommonButton variant="contained" onClick={() => Auth.signOut()}>
              ログアウト
            </CommonButton>
          </CommonBox>
        </CommonContainer>
      </Layout>
    </>
  );
};

export default Home;
