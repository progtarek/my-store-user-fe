import { SET_LANGUAGE } from '../constants';

const initialState = {
  language: window.localStorage.getItem('i18nextLng') || 'en',
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default generalReducer;
