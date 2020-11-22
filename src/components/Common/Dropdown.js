import React, { useState, useRef, useEffect } from 'react';
import {
  DropdownContainer,
  DropdownHeaderContainer,
  DropdownBodyContainer,
} from './Common.styles';
import { useTranslation } from 'react-i18next';

function Dropdown({ children, title }) {
  const [visible, setVisibility] = useState(false);
  const dropDownRef = useRef(null);
  const { i18n } = useTranslation();

  const handleClickOutside = (event) => {
    if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
      setVisibility(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  return (
    <DropdownContainer ref={dropDownRef}>
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
