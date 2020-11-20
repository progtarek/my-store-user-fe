import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { LocaleSettingsContainer } from './LocaleSettings.styles';

function LocaleSettings() {
  return (
    <LocaleSettingsContainer>
      <LanguageSwitcher></LanguageSwitcher>
    </LocaleSettingsContainer>
  );
}

export default LocaleSettings;
