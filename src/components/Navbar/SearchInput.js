import React from 'react';
import { SearchInputContainer } from './Navbar.styles';
import { useTranslation } from 'react-i18next';
import SearchIconDef from '../../assets/img/search.svg';
import { SearchTriggerContainer } from './Navbar.styles';

function SearchInput({ value, ...rest }) {
  const { t } = useTranslation();
  return (
    <SearchInputContainer>
      <input
        type='text'
        id='searchBar'
        autoComplete='off'
        placeholder={t('SEARCH_BAR')}
        value={value}
        aria-label={t('SEARCH_BAR')}
        {...rest}
      />
      <SearchTriggerContainer>
        <img src={SearchIconDef} alt={t('SEARCH_BAR')} />
      </SearchTriggerContainer>
    </SearchInputContainer>
  );
}

export default SearchInput;
