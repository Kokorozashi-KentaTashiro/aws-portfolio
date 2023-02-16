import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AppDispatch } from "app/store";
import { Auth } from "aws-amplify";
import { setPage } from "ducks/effect/slice";

export const useHeaderHook = () => {
  // redux
  const dispatch = useDispatch<AppDispatch>();

  // 変数
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  // useState
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  // react-router-dom
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickUserMenu = () => {
    Auth.signOut();
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const menuOnClick = (url: string) => {
    navigate(url);
    dispatch(setPage(url));
  };

  return {
    settings,
    anchorElNav,
    anchorElUser,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleClickUserMenu,
    handleCloseUserMenu,
    menuOnClick,
  };
};
