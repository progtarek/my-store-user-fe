import { LOGIN_SUCCESS, LOGOUT } from '../constants';

const initialState = {
  username: window.localStorage.getItem('username') || null,
  firstName: window.localStorage.getItem('firstName') || null,
  lastName: window.localStorage.getItem('lastName') || null,
  email: window.localStorage.getItem('email') || null,
  token: window.localStorage.getItem('token') || null,
  isAuthenticated: !!window.localStorage.getItem('token'),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        firstName: null,
        lastName: null,
        email: null,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
