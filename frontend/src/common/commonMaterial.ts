import { Button } from "@mui/material";
import { Container } from '@mui/material';
import { Box } from '@mui/material';
/* ↓これ追加 */
import styled from "@emotion/styled";

export const  CommonButton = styled(Button)`
    text-transform: none;
    background-color: var(--primary-color);
`;

export const  CommonContainer = styled(Container)`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`;
export const  CommonBox = styled(Box)`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin: 10%;
`;