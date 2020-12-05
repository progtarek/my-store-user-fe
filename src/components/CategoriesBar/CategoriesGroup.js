import React from 'react';
import {
  CategoriesGroupContainer,
  CategoriesGroupListContainer,
  CategoriesGroupMenuContainer,
} from './CategoriesBar.styles';

function CategoriesGroup() {
  return (
    <CategoriesGroupContainer>
      <CategoriesGroupListContainer>
        {[
          'Electronics',
          'Mobiles',
          'Fashion',
          'Home',
          'Beauty & Health',
          'Baby',
        ].map((category, index) => (
          <li>
            <a>{category}</a>
            <CategoriesGroupMenuContainer>
              Hello {index}
            </CategoriesGroupMenuContainer>
          </li>
        ))}
      </CategoriesGroupListContainer>
    </CategoriesGroupContainer>
  );
}

export default CategoriesGroup;
