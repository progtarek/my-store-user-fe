import React from 'react';
import {
  NavbarContainer,
  SignInUpContainer,
  TxtHeaderEle,
  CartContainer,
  CartIconContainer,
} from './Navbar.styles';
import { ContainerFluid, CustomLink } from '../../assets/css/common';
import Logo from './Logo';
import SearchBar from './SearchBar';
import Dropdown from '../Common/Dropdown';
import { useTranslation } from 'react-i18next';
import CartIcon from '../../assets/img/cart/cart.svg';

function NavBar() {
  const { t, i18n } = useTranslation();

  return (
    <NavbarContainer>
      <ContainerFluid>
        <Logo />
        <SearchBar />
        <Dropdown title={t('USER_SIGN_IN_OR_UP')}>
          <SignInUpContainer>
            <TxtHeaderEle>{t('RET_CUS')}</TxtHeaderEle>
            <button type='button'>{t('SIGN_IN')}</button>
          </SignInUpContainer>
          <div>
            <TxtHeaderEle>{t('DNH_ACCOUNT')}</TxtHeaderEle>
            <CustomLink language={i18n.language}>{t('SIGN_UP')}</CustomLink>
          </div>
        </Dropdown>
        <CartContainer language={i18n.language}>
          <span className='title'>{t('CART')}</span>
          <CartIconContainer>
            <img src={CartIcon} alt={t('CART')} />
          </CartIconContainer>
        </CartContainer>
      </ContainerFluid>
    </NavbarContainer>
  );
}

export default NavBar;
