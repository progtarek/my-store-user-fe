import React from 'react';
import CountrySwitcher from './CountrySwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import { LocaleSettingsContainer } from './LocaleSettings.styles';

function LocaleSettings() {
  return (
    <LocaleSettingsContainer>
      <LanguageSwitcher />
      <CountrySwitcher />
    </LocaleSettingsContainer>
  );
}

export default LocaleSettings;
