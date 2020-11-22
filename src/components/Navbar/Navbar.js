import React from 'react';
import {
  NavbarContainer,
  SignInContainer,
  TxtHeaderEle,
  SignUpContainer,
} from './Navbar.styles';
import { ContainerFluid, CustomLink } from '../../assets/css/common';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Dropdown from '../Common/Dropdown';
import { useTranslation } from 'react-i18next';

function NavBar() {
  const { t, i18n } = useTranslation();

  return (
    <NavbarContainer>
      <ContainerFluid>
        <Logo />
        <SearchBar />
        <Dropdown title={t('USER_SIGN_IN_OR_UP')}>
          <SignInContainer>
            <TxtHeaderEle>{t('RET_CUS')}</TxtHeaderEle>
            <button type='button'>{t('SIGN_IN')}</button>
          </SignInContainer>
          <SignUpContainer>
            <TxtHeaderEle>{t('DNH_ACCOUNT')}</TxtHeaderEle>
            <CustomLink language={i18n.language}>{t('SIGN_UP')}</CustomLink>
          </SignUpContainer>
        </Dropdown>
      </ContainerFluid>
    </NavbarContainer>
  );
}

export default NavBar;
