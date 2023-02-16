import { FC } from "react";

import { Grid } from "@mui/material";
import { CommonContainer, CommonBox } from "common/commonMaterial";

import Layout from "../components/Layout";

const Home: FC = () => {
  // 仮想DOM
  return (
    <>
      <Layout>
        <CommonContainer maxWidth="lg">
          <CommonBox>
            <Grid item xs={6}>
              ホーム画面
            </Grid>
            <Grid item xs={6}>
              システムのタイトル
            </Grid>
            <Grid item xs={6}>
              システムの使い方を説明
            </Grid>
          </CommonBox>
        </CommonContainer>
      </Layout>
    </>
  );
};

export default Home;
