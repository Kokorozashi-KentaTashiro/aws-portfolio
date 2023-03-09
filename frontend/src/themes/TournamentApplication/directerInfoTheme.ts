import { SxProps, Theme } from "@mui/material/styles";
import { Button } from "@mui/material";
import emotionStyled from "@emotion/styled";

// チーム情報カードスタイル
export const directerInfoCardSx: SxProps<Theme> = {
  width: { xs: 300, md: 750 },
  height: { xs: 300, md: 450 },
  margin: { xs: 1, md: 2 },
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 0,
};

export const directerCardMediaSx: SxProps<Theme> = {
  width: { xs: 300, md: 750 },
  height: { xs: 50, md: 80 },
  fontSize: { xs: 15, md: 25 },
  fontWeight: "bold",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  color: "#151515",
  backgroundColor: "#D9D9D9",
  borderBottom: "solid",
  borderWidth: 0.1,
};

export const directerCardContentSx: SxProps<Theme> = {
  height: { xs: 50, md: 370 },
  fontWeight: "bold",
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "center",
};

// Row
export const teamInfoRowSx: SxProps<Theme> = {
  width: { xs: 300, md: 650 },
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 2,
  marginBottom: 2,
  gap: 5,
};

// Element
export const directerElementSx: SxProps<Theme> = {
  width: { xs: 100, md: 350 },
  marginTop: 1,
  marginBottom: 1,
};
