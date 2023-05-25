import React from 'react';
import { useSelector } from "react-redux";
import { useMediaQuery } from 'react-responsive'
import { NavLink } from 'react-router-dom';

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
  const isMobile = useMediaQuery({ query: '(max-width: 767px)'})
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar
      position="static"
      sx={{
        background: '#0c6fba66',
        borderRadius: '6px'
      }}>
      <Toolbar>
        <Typography
          variant="h1"
          component="div"
          sx={{
            flexGrow: 1,
            fontSize: '40px',
            fontWeight: 500 }}>
          SECRETS
        </Typography>
        {accessToken ? (
          <Button
            color="inherit"
            sx={{ textTransform: 'none' }}>
            <NavLink
              className="nav-link"
              to="/login">
              Log out
            </NavLink>
          </Button>
        ) : (
          <NavBarResponsive />
        )}
      </Toolbar>
    </AppBar>
  </Box>
  )
}
