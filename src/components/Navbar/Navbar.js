import React from 'react';
import { NavbarContainer } from './Navbar.styles';
import { ContainerFluid } from '../../assets/css/common';
import Logo from './Logo';

function NavBar() {
  return (
    <NavbarContainer>
      <ContainerFluid>
        <Logo />
      </ContainerFluid>
    </NavbarContainer>
  );
}

export default NavBar;
