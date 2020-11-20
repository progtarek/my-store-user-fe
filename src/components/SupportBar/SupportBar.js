import React from 'react';
import { SupportBarContainer } from './SupportBar.styles';
import { ContainerFluid } from '../../assets/css/common';
import LocaleSettings from '../LocaleSettings/LocaleSettings';
import Usps from './Usps';

export default function SupportBar() {
  return (
    <SupportBarContainer>
      <ContainerFluid className='align-items-center justify-content-between'>
        <LocaleSettings />
        <Usps />
      </ContainerFluid>
    </SupportBarContainer>
  );
}
