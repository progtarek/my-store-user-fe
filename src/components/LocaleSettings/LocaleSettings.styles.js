import styled, { css } from 'styled-components';
import SpriteIcon from '../../assets/img/sprite.png';
import ArrowIcon from '../../assets/img/down-arrow.svg';

export const LocaleSettingsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LanguageSwitcherContainer = styled.div`
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  padding: ${(props) =>
    props.language === 'en' ? '0 15px 0 0' : '0 0 0 15px'};
  border-style: solid;
  border-color: rgba(64, 69, 83, 0.2);
  border-width: ${(props) =>
    props.language === 'en' ? '0 1px 0 0' : '0 0 0 1px'};
  line-height: 1;
`;

const EGIcon = css`
  background-position: -54px -168px;
`;

const KSAIcon = css`
  background-position: 0 -168px;
`;

const UAEIcon = css`
  background-position: -27px -168px;
`;

const mapCountryIcon = (country) => {
  switch (country) {
    case 'EG':
      return EGIcon;
    case 'KSA':
      return KSAIcon;
    default:
      return UAEIcon;
  }
};

export const CountrySwitcherContainer = styled.div`
  position: relative;
  user-select: none;

  .country-switcher-header {
    display: flex;
    padding: 0 1rem;
    align-items: center;
    position: relative;
    cursor: pointer;

    &__icon {
      width: 25px;
      height: 15px;
      background: url(${SpriteIcon}) no-repeat -2000px 0 / 187px auto;
      ${({ country }) => mapCountryIcon(country)}
    }

    &__title {
      margin: 2px 8px;
      font-size: 12px;

      span {
        font-weight: ${(props) => (props.language === 'en' ? '500' : 'bold')};
      }
    }

    &__arrow {
      width: 12px;
      height: 12px;
      background-image: url(${ArrowIcon});
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  .country-switcher-body {
    list-style: none;
    margin: 0;
    background-color: #fff;
    box-shadow: 0 5px 4px 0 rgba(0, 0, 0, 0.18);
    border-radius: 2px;
    position: absolute;
    top: 30px;
    left: -15px;
    z-index: 1003;
    padding: 8px 0px;
    white-space: nowrap;

    &::after {
      content: '';
      bottom: 100%;
      left: ${(props) => (props.language === 'en' ? '35px' : '141px')};
      border: 7px solid transparent;
      border-bottom-color: #fff;
      height: 0;
      width: 0;
      position: absolute;
    }

    .country-switcher-body__item {
      display: flex;
      align-items: center;
      padding: 10px 25px 10px 15px;
      width: 100%;
      cursor: pointer;
      transition: 0.3s all;

      &__circle {
        width: 18px;
        height: 18px;
        border: 2px solid rgb(226, 229, 241);
        border-radius: 20px;
      }

      &__country {
        font-size: 12px;
      }

      &:hover {
        background: #f7f7fa;
      }

      &.active {
        .country-switcher-body__item {
          &__circle {
            background-color: #3866df;
            border: none;
            position: relative;

            &::after {
              content: '';
              position: absolute;
              width: 8px;
              height: 8px;
              background-color: white;
              border-radius: 10px;
              top: 5px;
              left: 5px;
            }
          }

          &__country {
            font-weight: ${(props) =>
              props.language === 'en' ? '500' : 'bold'};
          }
        }
      }
    }
  }
`;

export const FlagContainer = styled.div`
  width: 25px;
  height: 15px;
  background: url(${SpriteIcon}) no-repeat -2000px 0 / 187px auto;
  ${({ country }) => mapCountryIcon(country)}
  margin: ${(props) =>
    props.language === 'en' ? '0 8px 0 12px' : '0 12px 0 8px'};
`;
