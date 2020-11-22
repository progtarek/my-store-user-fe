import React from 'react';
import { NavbarContainer } from './Navbar.styles';
import { ContainerFluid } from '../../assets/css/common';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Dropdown from '../Common/Dropdown';
import { useTranslation } from 'react-i18next';

function NavBar() {
  const { t } = useTranslation();

  return (
    <NavbarContainer>
      <ContainerFluid>
        <Logo />
        <SearchBar />
        <Dropdown title={t('USER_SIGN_IN_OR_UP')} />
      </ContainerFluid>
    </NavbarContainer>
  );
}

export default NavBar;
