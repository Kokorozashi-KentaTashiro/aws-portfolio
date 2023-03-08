import { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import styled from "@emotion/styled";

import { PAGEINFOS, HOME_INFO } from "common/PAGES";
import { useHeaderHook } from "hooks/headerHook";

export const CustomTypography = styled(Typography)`
  mr: 2;
  font-family: monospace;
  font-weight: 700;
  letter-spacing: 0.3rem;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

export const CustomAppBar = styled(AppBar)`
  background-color: var(--primary-color);
`;

// Headerのテンプレート
// https://mui.com/material-ui/react-app-bar/
const Header: FC = () => {
  // ReactHook
  const {
    settings,
    anchorElNav,
    anchorElUser,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleClickUserMenu,
    handleCloseUserMenu,
    menuOnClick,
  } = useHeaderHook();
  return (
    <CustomAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <CustomTypography
            variant="h6"
            noWrap
            onClick={() => menuOnClick(HOME_INFO.URL)}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            運営くん
          </CustomTypography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {PAGEINFOS.map(
                (PAGEINFO) =>
                  PAGEINFO.VIEW && (
                    <MenuItem
                      key={PAGEINFO.CONTEXT}
                      onClick={() => menuOnClick(PAGEINFO.URL)}
                    >
                      <Typography textAlign="center">
                        {PAGEINFO.CONTEXT}
                      </Typography>
                    </MenuItem>
                  )
              )}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <CustomTypography
            variant="h5"
            noWrap
            onClick={() => menuOnClick(HOME_INFO.URL)}
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            運営くん
          </CustomTypography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {PAGEINFOS.map(
              (PAGEINFO) =>
                PAGEINFO.VIEW && (
                  <Button
                    key={PAGEINFO.CONTEXT}
                    onClick={() => menuOnClick(PAGEINFO.URL)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {PAGEINFO.CONTEXT}
                  </Button>
                )
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Kenta Tashiro" src="../static/sample_icon.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleClickUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </CustomAppBar>
  );
};
export default Header;
