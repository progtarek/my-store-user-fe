import styled from 'styled-components';

export const ContainerFluid = styled.div`
  display: flex;
  flex: 1;
  margin: 0 auto;
  padding: 0 45px;
  max-width: 1440px;
  box-sizing: border-box;
`;

export const CustomLink = styled.a`
  color: rgb(56, 102, 223);
  display: block;
  font-weight: ${({ language }) => (language === 'en' ? '500' : '600')};
  margin-bottom: 7px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`;
