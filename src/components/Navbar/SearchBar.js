import React, { useState } from 'react';
import { SearchBarContainer } from './Navbar.styles';
import SearchInput from './SearchInput';

function SearchBar() {
  const [searchKeyword, setSearchKeyWord] = useState('');
  const onSearch = (keyword) => {
    setSearchKeyWord(keyword);
  };

  return (
    <SearchBarContainer>
      <SearchInput
        value={searchKeyword}
        onChange={(e) => onSearch(e.target.value)}
      />
    </SearchBarContainer>
  );
}

export default SearchBar;
