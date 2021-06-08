import * as api from "../api";
import LOGIN from '../constants/actions-types';

export const login = (userData) => async (dispatch) => {
  dispatch({
    type: LOGIN,
    payload: userData,
  });
};
