import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CategoriesListContainer } from './CategoriesBar.styles';

function AllCategoriesList() {
  const { t, i18n } = useTranslation();
  return (
    <CategoriesListContainer language={i18n.language}>
      <div className='trigger'>
        <Link to='all-categories'>{t('ALL_CATEGORIES')}</Link>
      </div>
      <div className='categories-cont'>
        <div className='categories'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <a key={index}>Category {index + 1}</a>
          ))}
        </div>
        <div className='categories--details'>
          <div className='top-bar'>Beauty & Health</div>
          <div className='sub-cats'>
            <div className='column'>
              <div className='sub-title'>{t('MOST_POPULAR')}</div>
              <div className='list'>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <a key={index}>list {index + 1}</a>
                ))}
              </div>
            </div>
            <div className='column'>
              <div className='sub-title'>{t('TOP_BRANDS')}</div>
              <div className='list'>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <a key={index}>list {index + 1}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CategoriesListContainer>
  );
}

export default AllCategoriesList;
