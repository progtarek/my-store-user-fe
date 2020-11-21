import styled from 'styled-components';
import { PRIMARY } from '../../assets/css/variables';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${PRIMARY};
  height: 65px;
`;

export const LogoContainer = styled.div`
  height: 30px;
  display: block;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: auto;
  }
`;

export const SearchBarContainer = styled.div`
  margin: 0 40px;
`;
