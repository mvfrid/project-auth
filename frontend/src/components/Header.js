import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { user } from "reducers/user";

//MUI template imports
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box } from '@mui/material';
import { NavBarResponsive } from './NavbarResponsive';


export const Header = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(user.actions.signOut());
    if(!accessToken) {
        navigate("/login")
    }
}

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar
      position="static"
      sx={{
        background: '#0c6fba66',
        borderRadius: '6px'
      }}>
      <Toolbar sx={{ paddingRight: '0px' }}>
          <Typography
            component="div"
            sx={{
              flexGrow: 1 }}>
              <NavLink
                className="logo"
                to="/">
                SECRETS
              </NavLink>
          </Typography>
        {accessToken ? (
          <Button
            type="button"
            onClick={handleLogOut}
            color="inherit"
            sx={{
              textTransform: 'none',
              fontSize: '24px',
              fontWeight: 500
            }}>
              Log out
          </Button>
        ) : (
          <NavBarResponsive />
        )}
      </Toolbar>
    </AppBar>
  </Box>
  )
}
