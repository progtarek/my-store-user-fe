import React from 'react';
import { NavbarContainer } from './Navbar.styles';
import { ContainerFluid } from '../../assets/css/common';
import Logo from './Logo';
import SearchBar from './SearchBar';

function NavBar() {
  return (
    <NavbarContainer>
      <ContainerFluid>
        <Logo />
        <SearchBar />
      </ContainerFluid>
    </NavbarContainer>
  );
}

export default NavBar;
