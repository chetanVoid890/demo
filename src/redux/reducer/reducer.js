import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
  } from '../type/type'
  const INITIAL_STATE = {
    isLoggingIn: false,
    isLoggingOut: false,
    loginError: false,
    logoutError: false,
    user: {}
  };
  const reducer = (state = INITIAL_STATE, action) => {
  
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          isLoggingIn: true,
          loginError: false
        };
  
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggingIn: false,
          user: action.user
        };
  
      case LOGIN_FAILURE:
        return {
          ...state,
          isLoggingIn: false,
          loginError: true
        };
  
      case LOGOUT_REQUEST:
        return {
          ...state,
          isLoggingOut: true,
          logoutError: false
        };
      case LOGOUT_SUCCESS:
        return {
          ...state,
          isLoggingOut: false,
          user: null
        };
      case LOGOUT_FAILURE:
        return {
          ...state,
          isLoggingOut: false,
          logoutError: true
        };
      default: return state;
  
    }
  
  };
  
  export default reducer;