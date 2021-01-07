import styled, { css } from 'styled-components';

export const CategoriesBarContainer = styled.div`
  background: rgb(252, 251, 244);
  border-bottom: 1px solid rgb(226, 229, 241);
`;

export const CategoriesListContainer = styled.div`
  position: relative;

  .trigger {
    cursor: pointer;
    width: 216px;
    text-transform: uppercase;
    min-height: 44px;
    letter-spacing: 0.2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: ${({ language }) => (language === 'en' ? '500' : '700')};
    ${({ language }) =>
      language === 'en'
        ? css`
            border-right: 1px solid rgb(226, 229, 241);
          `
        : css`
            border-left: 1px solid rgb(226, 229, 241);
          `}
    a {
      color: rgb(56, 102, 223);
      text-decoration: none;
      font-size: 14px;
    }

    &::after {
      content: '';
      width: 0px;
      height: 0px;
      border-width: 7px;
      border-style: solid;
      border-color: rgb(56, 102, 223) transparent transparent;
      border-image: initial;
      margin-top: 7px;
      transition: transform 0.3s ease-in-out 0s;
      margin: ${({ language }) =>
        language === 'en' ? '7px 10px 0 0' : '7px 0 0 10px'};
    }

    &:hover + .categories-cont {
      display: flex;
    }
  }

  .categories-cont {
    display: none;
    border-radius: 3px;
    box-shadow: 0px 5px 5px -4px;
    position: absolute;
    background: rgb(255, 255, 255);
    ${({ language }) =>
      language === 'en'
        ? css`
            left: -45px;
          `
        : css`
            right: -45px;
          `}

    .categories {
      background-color: rgb(252, 251, 244);
      padding: 15px 30px;
      display: flex;
      flex-direction: column;
      width: 261px;

      ${({ language }) =>
        language === 'en'
          ? css`
              border-right: 1px solid rgb(226, 229, 241);
            `
          : css`
              border-left: 1px solid rgb(226, 229, 241);
            `};

      a {
        padding: 8px 15px;
        cursor: pointer;
        transition: 0.3s all;
        font-size: 14px;

        &:hover {
          color: rgb(56, 102, 223);
        }
      }

      &--details {
        padding: 15px;
        min-width: 500px;
        display: flex;
        flex-direction: column;

        .top-bar {
          border-bottom: 1px solid rgb(241, 243, 249);
          padding-bottom: 10px;
          font-size: 17px;
          font-weight: ${({ language }) => (language === 'en' ? '500' : '700')};
          color: rgb(64, 69, 83);
        }

        .sub-cats {
          display: flex;
          padding-top: 10px;

          .column {
            flex: 1 1;

            .sub-title {
              font-weight: ${({ language }) =>
                language === 'en' ? '500' : '700'};
              cursor: default;
            }

            .list {
              display: flex;
              flex-direction: column;

              a {
                cursor: pointer;
                margin-top: 15px;
                font-size: 14px;

                &:hover {
                  color: rgb(56, 102, 223);
                }
              }
            }
          }
        }
      }
    }

    &:hover {
      display: flex;
    }
  }
`;

export const CategoriesGroupContainer = styled.div`
  display: flex;
`;

export const CategoriesGroupMenuContainer = styled.div`
  display: none;
  position: absolute;
  margin-top: 1px;
  top: auto;
  left: 0px;
  right: 0px;
  background-color: white;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 25px;
  box-shadow: 0px 5px 5px -4px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &:hover {
    display: flex;
  }
`;

export const CategoriesGroupListContainer = styled.ul`
  padding: 0;
  margin: 0;

  .category-item {
    display: inline-block;

    .category-link {
      display: flex;
      align-items: center;
      text-transform: uppercase;
      padding: 0px 15px;
      min-height: 44px;
      letter-spacing: 0.2px;
      font-weight: 500;
      text-decoration: none;
      cursor: pointer;
      transition: 0.3s all;
      font-size: 14px;

      &:hover {
        background-color: rgb(255, 255, 255);
        box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 4px 0px;
      }

      &:hover + ${CategoriesGroupMenuContainer} {
        display: flex;
      }
    }
  }
`;
