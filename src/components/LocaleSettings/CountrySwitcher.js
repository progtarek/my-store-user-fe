import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import {
  CountrySwitcherContainer,
  FlagContainer,
} from './LocaleSettings.styles';
import { setCountryAction } from '../../store/actions/general.action';

function CountrySwitcher({ country, language, setCountry }) {
  const [visibility, setVisibility] = useState(false);
  const countrySwitcherRef = useRef(null);
  const { t } = useTranslation();

  const handleClickOutside = (event) => {
    if (
      countrySwitcherRef.current &&
      !countrySwitcherRef.current.contains(event.target)
    ) {
      setVisibility(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  const onSelectCountry = (pickedCountry) => {
    setVisibility(false);
    setCountry(pickedCountry);
  };

  return (
    <CountrySwitcherContainer
      ref={countrySwitcherRef}
      country={country}
      language={language}
    >
      <div
        className='country-switcher-header'
        onClick={() => setVisibility(!visibility)}
      >
        <div className='country-switcher-header__icon'></div>
        <div className='country-switcher-header__title'>
          {t('SHIP_TO')} &nbsp;
          <span>{t(`COUNTRY.${country}`)}</span>
        </div>
        <div className='country-switcher-header__arrow'></div>
      </div>
      {visibility ? (
        <ul className='country-switcher-body'>
          <li
            className={`country-switcher-body__item ${
              country === 'UAE' ? 'active' : ''
            }`}
            onClick={() => onSelectCountry('UAE')}
          >
            <div className='country-switcher-body__item__circle'></div>
            <FlagContainer country />
            <div className='country-switcher-body__item__country'>
              {t('COUNTRY.UAE')}
            </div>
          </li>
          <li
            className={`country-switcher-body__item ${
              country === 'KSA' ? 'active' : ''
            }`}
            onClick={() => onSelectCountry('KSA')}
          >
            <div className='country-switcher-body__item__circle'></div>
            <FlagContainer country='KSA' />
            <div className='country-switcher-body__item__country'>
              {t('COUNTRY.KSA')}
            </div>
          </li>
          <li
            className={`country-switcher-body__item ${
              country === 'EG' ? 'active' : ''
            }`}
            onClick={() => onSelectCountry('EG')}
          >
            <div className='country-switcher-body__item__circle'></div>
            <FlagContainer country='EG' />
            <div className='country-switcher-body__item__country'>
              {t('COUNTRY.EG')}
            </div>
          </li>
        </ul>
      ) : null}
    </CountrySwitcherContainer>
  );
}

const mapStateToProps = ({ general }) => ({
  country: general.country,
  language: general.language,
});

const mapDispatchToProps = (dispatch) => ({
  setCountry: (country) => dispatch(setCountryAction(country)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountrySwitcher);
