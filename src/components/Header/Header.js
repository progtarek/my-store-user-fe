import React from 'react';
import Navbar from '../Navbar/Navbar';
import SupportBar from '../SupportBar/SupportBar';
import { HeaderContainer } from './Header.styles';

function Header() {
  return (
    <HeaderContainer>
      <SupportBar />
      <Navbar />
    </HeaderContainer>
  );
}

export default Header;
