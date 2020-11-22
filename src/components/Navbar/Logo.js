import React from 'react';
import { LogoContainer } from './Navbar.styles';
import LogoIconEn from '../../assets/img/logo-en.svg';
import LogoIconAr from '../../assets/img/logo-ar.svg';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Logo() {
  const { i18n } = useTranslation();

  return (
    <LogoContainer>
      <NavLink to='/'>
        {i18n.language === 'en' ? (
          <img src={LogoIconEn} alt='noon' />
        ) : (
          <img src={LogoIconAr} alt='نون' />
        )}
      </NavLink>
    </LogoContainer>
  );
}

export default Logo;
