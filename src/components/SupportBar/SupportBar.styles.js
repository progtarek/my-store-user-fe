import styled, { css } from 'styled-components';
import { PRIMARY } from '../../assets/css/variables';
import SpriteIcons from '../../assets/img/sprite.png';

export const SupportBarContainer = styled.div`
  height: 38px;
  display: flex;
  align-items: center;
  background-color: ${PRIMARY};
`;

export const UspsContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const UspsItem = styled.li`
  display: flex;
  align-items: center;
  margin: ${(props) => (props.language === 'en' ? '0 25px 0 0' : '0 0 0 25px')};
`;

export const UspsIcon = styled.span`
  height: 17px;
  background: url(${SpriteIcons}) no-repeat -2000px 0 / 187px auto;
  display: block;
  margin: ${(props) => (props.language === 'en' ? '0 8px 0 0' : '0 0 0 8px')};
  margin-top: -1px;
  flex: 0 0 auto;
  ${({ icon }) => mapPropsToUspsIcons(icon)}
`;

export const UspsText = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 0.05em;
`;

const ReturnsIconStyle = css`
  background-position: -24px -313px;
  width: 17px;
`;

const DealsIconStyle = css`
  background-position: -43px -313px;
  width: 18px;
`;

const mapPropsToUspsIcons = (icon) => {
  switch (icon) {
    case 'returns':
      return ReturnsIconStyle;
    default:
      return DealsIconStyle;
  }
};
