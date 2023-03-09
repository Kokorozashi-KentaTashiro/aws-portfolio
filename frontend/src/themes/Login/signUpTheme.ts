import { SxProps, Theme } from "@mui/material/styles";
// style（materialUiに対するスタイルを定義）
export const verifyCardSx: SxProps<Theme> = {
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  width: { xs: 300, md: 400 },
  height: { xs: 150, md: 200 },
};

export const createCardSx: SxProps<Theme> = {
  marginTop: 2,
  width: { xs: 100, md: 120 },
  height: { xs: 40, md: 50 },
};

export const signUpTextSx: SxProps<Theme> = {
  margin: 1,
};

export const signUpButtonSx: SxProps<Theme> = {
  marginTop: 2,
  width: { xs: 100, md: 120 },
  height: { xs: 40, md: 50 },
};
