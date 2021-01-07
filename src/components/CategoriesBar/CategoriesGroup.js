import React from 'react';
import { ContainerFluid, H5 } from '../../assets/css/common';
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
          <li className='category-item' key={index}>
            <a className='category-link'>{category}</a>
            <CategoriesGroupMenuContainer>
              <ContainerFluid>
                <div className='column categories'>
                  <H5>Hello {index}</H5>
                  <ul>
                    {[
                      'Televisions',
                      'Laptops',
                      'Cameras',
                      'Audio',
                      'IT Essentials',
                      'Video Games',
                    ].map((item, i) => (
                      <li className='' key={i}>
                        <a>{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </ContainerFluid>
            </CategoriesGroupMenuContainer>
          </li>
        ))}
      </CategoriesGroupListContainer>
    </CategoriesGroupContainer>
  );
}

export default CategoriesGroup;
