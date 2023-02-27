import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { Link } from "@mui/material";

import emotionStyled from "@emotion/styled";

export const CommonLink = emotionStyled(Link)`
    cursor: pointer;
`;
export const CommonButton = emotionStyled(Button)`
    text-transform: none;
    background-color: var(--primary-color);
`;

export const CommonContainer = emotionStyled(Container)`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;

export const CommonBox = emotionStyled(Box)`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin: 10%;
`;

export const CommonTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const CommonTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
