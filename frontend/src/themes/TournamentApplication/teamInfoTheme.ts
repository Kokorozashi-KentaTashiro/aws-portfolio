import { SxProps, Theme } from "@mui/material/styles";
import { Button } from "@mui/material";
import emotionStyled from "@emotion/styled";

// チーム情報カードスタイル
export const teamInfoCardSx: SxProps<Theme> = {
  width: { xs: 300, md: 750 },
  height: { xs: 300, md: 550 },
  margin: { xs: 1, md: 2 },
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 0,
};

export const teamInfoCardMediaSx: SxProps<Theme> = {
  width: { xs: 300, md: 750 },
  height: { xs: 50, md: 100 },
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

export const teamInfoCardContentSx: SxProps<Theme> = {
  height: { xs: 50, md: 450 },
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
export const teamElementSx: SxProps<Theme> = {
  width: { xs: 100, md: 240 },
};

export const teamZoneElementSx: SxProps<Theme> = {
  width: { xs: 100, md: 140 },
};

export const teamRankElementSx: SxProps<Theme> = {
  width: { xs: 15, md: 90 },
};

export const teamAddressElementSx: SxProps<Theme> = {
  width: { xs: 15, md: 550 },
};

export const teamPhoneElementSx: SxProps<Theme> = {
  width: { xs: 15, md: 255 },
};

export const teamEmailElementSx: SxProps<Theme> = {
  width: { xs: 15, md: 255 },
};

export const teamManagerElementSx: SxProps<Theme> = {
  width: { xs: 15, md: 350 },
};

export const teamSexElementSx: SxProps<Theme> = {
  width: { xs: 15, md: 90 },
};
