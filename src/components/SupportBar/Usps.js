import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  UspsContainer,
  UspsItem,
  UspsIcon,
  UspsText,
} from './SupportBar.styles';

function Usps() {
  const { t, i18n } = useTranslation();

  return (
    <UspsContainer>
      <UspsItem language={i18n.language}>
        <UspsIcon icon='returns' language={i18n.language} />
        <UspsText>{t('SUPPORT_BAR.USPS.RETURNS')}</UspsText>
      </UspsItem>
      <UspsItem language={i18n.language}>
        <UspsIcon language={i18n.language} />
        <UspsText>{t('SUPPORT_BAR.USPS.OFFERS')}</UspsText>
      </UspsItem>
    </UspsContainer>
  );
}

export default Usps;
