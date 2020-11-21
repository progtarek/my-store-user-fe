import { SET_COUNTRY, SET_LANGUAGE } from '../constants';

const initialState = {
  language: window.localStorage.getItem('i18nextLng') || 'en',
  country: window.localStorage.getItem('country') || 'EG',
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
};

export default generalReducer;
