import React from 'react';
import { CategoriesBarContainer } from './CategoriesBar.styles';
import { ContainerFluid } from '../../assets/css/common';
import AllCategoriesList from './AllCategoriesList';
import CategoriesGroup from './CategoriesGroup';

function CategoriesBar() {
  return (
    <CategoriesBarContainer>
      <ContainerFluid>
        <AllCategoriesList />
        <CategoriesGroup />
      </ContainerFluid>
    </CategoriesBarContainer>
  );
}

export default CategoriesBar;
