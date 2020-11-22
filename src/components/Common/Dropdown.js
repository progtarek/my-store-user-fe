import React, { useState } from 'react';
import {
  DropdownContainer,
  DropdownHeaderContainer,
  DropdownBodyContainer,
} from './Common.styles';
import { useTranslation } from 'react-i18next';

function Dropdown({ children, title }) {
  const [visible, setVisibility] = useState(false);
  const { i18n } = useTranslation();

  return (
    <DropdownContainer>
      <DropdownHeaderContainer
        language={i18n.language}
        onClick={() => setVisibility(!visible)}
      >
        <div className='title'>{title}</div>
        <span className='icon'></span>
      </DropdownHeaderContainer>
      {visible ? (
        <DropdownBodyContainer language={i18n.language}>
          {children}
        </DropdownBodyContainer>
      ) : null}
    </DropdownContainer>
  );
}

export default Dropdown;
