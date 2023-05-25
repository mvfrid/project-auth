import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <h1>SECRETS</h1>
      <nav>
        <NavLink to="/register">Sign up</NavLink>
        <NavLink to="/signin">Log in</NavLink>
      </nav>
    </header>
  )
}
