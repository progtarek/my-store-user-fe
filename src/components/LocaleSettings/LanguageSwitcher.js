import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { setLanguageAction } from '../../store/actions/general.action';
import { LanguageSwitcherContainer } from './LocaleSettings.styles';

const LanguageSwitcher = ({ language, setLanguage }) => {
  const { t, i18n } = useTranslation();

  const switchLanguage = () => {
    const switchedLanguage = language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(switchedLanguage);
    setLanguage(switchedLanguage);
  };

  return (
    <LanguageSwitcherContainer
      language={language}
      onClick={switchLanguage}
      className={language === 'en' ? 'rtl-content' : ''}
    >
      {t('LANGUAGE')}
    </LanguageSwitcherContainer>
  );
};

const mapStateToProps = ({ general }) => ({
  language: general.language,
});

const mapDispatchToProps = (dispatch) => ({
  setLanguage: (language) => dispatch(setLanguageAction(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSwitcher);
