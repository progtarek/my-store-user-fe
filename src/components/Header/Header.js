import React from 'react';
import CategoriesBar from '../CategoriesBar/CategoriesBar';
import Navbar from '../Navbar/Navbar';
import SupportBar from '../SupportBar/SupportBar';
import { HeaderContainer } from './Header.styles';

function Header() {
  return (
    <HeaderContainer>
      <SupportBar />
      <Navbar />
      <CategoriesBar />
    </HeaderContainer>
  );
}

export default Header;
