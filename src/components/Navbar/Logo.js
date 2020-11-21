import React from 'react';
import { LogoContainer } from './Navbar.styles';
import LogoIcon from '../../assets/img/logo.svg';
import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <LogoContainer>
      <NavLink to='/'>
        <img src={LogoIcon} alt='noon' />
      </NavLink>
    </LogoContainer>
  );
}

export default Logo;
