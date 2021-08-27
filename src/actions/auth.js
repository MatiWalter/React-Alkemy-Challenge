import { types } from "../types/types"

export const startLogin = (token) => {
  return (dispatch) => {
    localStorage.setItem('token', token);
    dispatch(login(token));
  }
}

export const login = (token) => ({
  type: types.login,
  payload: token
});

export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  }
}

export const logout = () => ({
  type: types.logout
})



