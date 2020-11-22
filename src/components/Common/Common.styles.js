import styled, { css } from 'styled-components';
import ArrowIcon from '../../assets/img/down-arrow.svg';

export const DropdownContainer = styled.div`
  position: relative;
  display: flex;
`;

export const DropdownHeaderContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: opacity 0.2s ease-in-out 0s;
  user-select: none;

  .title {
    font-weight: ${({ language }) => (language === 'en' ? '600' : 'bold')};
    font-size: 13px;
    text-align: right;
    max-width: 130px;
    flex: 1 1 0%;
    max-width: 155px;
  }

  .icon {
    width: 12px;
    height: 12px;
    background-image: url(${ArrowIcon});
    background-repeat: no-repeat;
    background-size: cover;
    margin: ${({ language }) =>
      language === 'en' ? '0 0 0 8px' : '0 8px 0 0'};
  }
`;

export const DropdownBodyContainer = styled.div`
  background-color: rgb(255, 255, 255);
  white-space: nowrap;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 4px 0px;
  position: absolute;
  z-index: 1003;
  text-align: center;
  border-radius: 2px;
  padding: 8px 0px;
  position: absolute;
  left: 50%;
  top: 36px;
  transform: translate(-50%, 0%);
  min-width: 200px;

  &::after {
    content: '';
    bottom: 100%;
    ${({ language }) =>
      language === 'ar'
        ? css`
            left: 12%;
          `
        : css`
            right: 17%;
          `};
    border: 7px solid transparent;
    border-bottom-color: #fff;
    height: 0;
    width: 0;
    position: absolute;
  }
`;
