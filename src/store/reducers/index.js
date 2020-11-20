// reducers.js
import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import generalReducer from './general.reducer';

export default combineReducers({ auth: authReducer, general: generalReducer });
