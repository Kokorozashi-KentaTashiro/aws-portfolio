import { SxProps, Theme } from "@mui/material/styles";
import { Icon } from "@iconify/react";
import emotionStyled from "@emotion/styled";

// 参加者テーブルスタイル
export const teamApplicantTableSx: SxProps<Theme> = {
  width: { xs: 300, md: 750 },
  margin: { xs: 1, md: 2 },
};

export const teamApplicantTableHeadeSx: SxProps<Theme> = {
  width: { xs: 300, md: 750 },
};

export const teamApplicantTableHeadeRowSx: SxProps<Theme> = {
  "& th": {
    fontWeight: "bold",
    color: "#151515",
    backgroundColor: "#D9D9D9",
  },
  "& th:nth-child(1)": {
    width: 60,
  },
  "& th:nth-child(2)": {
    width: 60,
  },
  "& th:nth-child(3)": {
    width: 100,
  },
  "& th:nth-child(4)": {
    width: 30,
  },
  "& th:nth-child(5)": {
    width: 20,
  },
  "& th:nth-child(6)": {
    width: 20,
  },
};

export const teamApplicantTableBodyRowSx: SxProps<Theme> = {
  height: { xs: 50, md: 80 },
};

export const teamApplicantTableBodyCellSx: SxProps<Theme> = {
  position: "relative",
};

export const teamApplicantTableIncrementRowSx: SxProps<Theme> = {
  height: { xs: 50, md: 60 },
  textAlign: "center",
  position: "relative",
};

export const AddIcon = emotionStyled(Icon)`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 350px;
  top: 6px;
  color: #50A6D7;
  cursor: pointer;
`;

export const DeleteIcon = emotionStyled(Icon)`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 22px;
  top: 18px;
  color: #FF3232;
  cursor: pointer;
`;
