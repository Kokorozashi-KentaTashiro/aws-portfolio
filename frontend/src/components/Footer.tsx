import { FC } from "react";
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import styled from "@emotion/styled";

export const CustomBottomNavigation = styled(BottomNavigation)`
  background-color: var(--primary-color);
  bottom: 0;
  width: 100vw;
`;

// BottomNavigation
// https://mui.com/material-ui/api/bottom-navigation/
const Footer: FC = () => {
  return (
    <CustomBottomNavigation
      sx={{
        height: { xs: 56, md: 68.5 },
      }}
    >
      <p>© table tennis club of junior high school in Chiba</p>
    </CustomBottomNavigation>
  );
};
export default Footer;
