import AUTH from './actionTypes';

// Action Creators

export const loginFacebook = payload => {
  return {type: AUTH.LOGIN_FB, payload: payload}
}

export const loginGoogle = payload => {
  return {type: AUTH.LOGIN_GOOGLE, payload: payload}
}

export const logout = payload => {
  return {type: AUTH.LOGOUT, payload: payload}
}

// Thunk Actions

export const onLoginFacebook = payload =>{
  return dispatch => {
    dispatch(loginFacebook(payload));
  }
}

export const onLoginGoogle = payload =>{
  return dispatch => {
    dispatch(loginGoogle(payload));
  }
}

export const onLogout = payload =>{
  return dispatch => {
    dispatch(logout(payload));
  }
}