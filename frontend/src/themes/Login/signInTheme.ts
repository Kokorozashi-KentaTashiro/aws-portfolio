import { SxProps, Theme } from "@mui/material/styles";
// style（materialUiに対するスタイルを定義）
export const signInCardSx: SxProps<Theme> = {
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  width: { xs: 300, md: 400 },
  height: { xs: 250, md: 300 },
};

export const signInTextSx: SxProps<Theme> = {
  margin: 2,
};

export const signInButtonSx: SxProps<Theme> = {
  marginTop: 2,
  width: { xs: 100, md: 120 },
  height: { xs: 40, md: 50 },
};
