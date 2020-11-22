import styled from 'styled-components';
import { PRIMARY } from '../../assets/css/variables';
import { ContainerFluid } from '../../assets/css/common';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${PRIMARY};
  height: 65px;

  ${ContainerFluid} {
    align-items: center;
  }
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
  flex: 1;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  background-color: #fff;
  position: relative;
  z-index: 50;

  input {
    width: 100%;
    height: 36px;
    padding: 12px 15px;
    border: 0;
    background-color: transparent;
    outline: none;
    font: inherit;
    color: inherit;
    box-sizing: border-box;
    border-radius: 0;
  }
`;

export const SearchTriggerContainer = styled.div`
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 36px;
  cursor: pointer;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: auto;
  }
`;
