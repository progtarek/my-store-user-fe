import { APP_LOAD, SET_LANGUAGE } from '../constants';

export const appLoadAction = () => ({
  type: APP_LOAD,
});

export const setLanguageAction = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});
