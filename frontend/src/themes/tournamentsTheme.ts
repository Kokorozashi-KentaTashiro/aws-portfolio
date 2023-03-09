import { SxProps, Theme } from "@mui/material/styles";
import { Button } from "@mui/material";
import emotionStyled from "@emotion/styled";

// 新規登録ボタン
export const RegistButton = emotionStyled(Button)`
  background-color: #50A6D7;
  box-shadow: 0 3px 0 #204256;
    &:hover {
      background-color: #50A6D7;
      transform: translateY(1px);
      box-shadow: none;
    }
`;
export const registButtonSx: SxProps<Theme> = {
  width: { xs: 100, md: 150 },
  height: { xs: 30, md: 50 },
  margin: { xs: 1, md: 2 },
};

// トーナメントカードスタイル
export const tournamentsCardSx: SxProps<Theme> = {
  width: { xs: 300, md: 750 },
  height: { xs: 300, md: 300 },
  margin: { xs: 1, md: 2 },
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const tournamentsCardMediaSx: SxProps<Theme> = {
  width: { xs: 300, md: 750 },
  height: { xs: 50, md: 80 },
  paddingLeft: { xs: 1, md: 8 },
  fontSize: { xs: 15, md: 25 },
  fontWeight: "bold",
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "start",
  borderBottom: "solid",
  borderColor: "#D9D9D9",
};

export const tournamentsCardContentSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "left",
  alignItems: "center",
  height: { xs: 50, md: 180 },
  paddingLeft: { xs: 1, md: 3.2 },
  margin: 0,
};

// Viewエリアスタイル
export const viewAreaSx: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};

export const eventDateCardSx: SxProps<Theme> = {
  width: { xs: 80, md: 200 },
  height: { xs: 50, md: 80 },
  marginRight: 1,
  marginLeft: 1,
};

export const eventDateCardMediaSx: SxProps<Theme> = {
  height: { xs: 15, md: 25 },
  paddingLeft: { xs: 1, md: 2 },
  fontSize: { xs: 5, md: 16 },
  fontWeight: "bold",
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "start",
  backgroundColor: "#D9D9D9",
};

export const placeCardSx: SxProps<Theme> = {
  width: { xs: 80, md: 250 },
  height: { xs: 50, md: 80 },
  marginRight: 1,
  marginLeft: 1,
};

export const placeCardMediaSx: SxProps<Theme> = {
  height: { xs: 15, md: 25 },
  paddingLeft: { xs: 1, md: 2 },
  fontSize: { xs: 5, md: 16 },
  fontWeight: "bold",
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "start",
  backgroundColor: "#D9D9D9",
};

export const applicationEndCardSx: SxProps<Theme> = {
  width: { xs: 80, md: 200 },
  height: { xs: 50, md: 80 },
  marginRight: 1,
  marginLeft: 1,
};

export const applicationEndCardMediaSx: SxProps<Theme> = {
  height: { xs: 15, md: 25 },
  paddingLeft: { xs: 1, md: 2 },
  fontSize: { xs: 5, md: 16 },
  fontWeight: "bold",
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "start",
  backgroundColor: "#D9D9D9",
};

// Buttonエリアスタイル
export const buttonAreaSx: SxProps<Theme> = {
  display: "flex",
  flexFlow: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: 1,
  paddingRight: 1,
};

export const DetailViewButton = emotionStyled(Button)`
  color: #D76550;
  background-color: #D9D9D9;
  box-shadow: 0 3px 0 #565656;
    &:hover {
      background-color: #D9D9D9;
      transform: translateY(1px);
      box-shadow: none;
    }
`;

export const detailViewButtonSx: SxProps<Theme> = {
  width: { xs: 15, md: 200 },
  height: { xs: 15, md: 70 },
  marginRight: { xs: 15, md: 5 },
  fontSize: { xs: 5, md: 20 },
  fontWeight: "bold",
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const ApplicantButton = emotionStyled(Button)`
  color: #FFFFFF;
  background-color: #D76550;
  box-shadow: 0 3px 0 #562820;
    &:hover {
      background-color: #D76550;
      transform: translateY(1px);
      box-shadow: none;
    }
`;

export const applicantButtonSx: SxProps<Theme> = {
  width: { xs: 15, md: 445 },
  height: { xs: 15, md: 70 },
  paddingLeft: { xs: 1, md: 2 },
  fontSize: { xs: 5, md: 20 },
  margin: "auto",
  display: "flex",
  flexFlow: "row",
};

export const applicantNormalFontSx: SxProps<Theme> = {
  fontSize: { xs: 5, md: 20 },
  fontWeight: "bold",
};

export const applicantSpecialFontSx: SxProps<Theme> = {
  fontSize: { xs: 5, md: 30 },
  fontWeight: "bold",
};
