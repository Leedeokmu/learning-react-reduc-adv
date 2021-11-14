import {AUTH_ERROR, AUTH_USER} from "./types";
import axios from "axios";

export const signup = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3090/signup', formProps);
    const token = response.data.token;
    dispatch({type: AUTH_USER, payload: token});
    localStorage.setItem('token', token)
    callback();
  }catch (err) {
    console.error(err);
    dispatch({type: AUTH_ERROR, payload: 'Email is in use'})
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  }
}

export const signin = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3090/signin', formProps);
    const token = response.data.token;
    dispatch({type: AUTH_USER, payload: token});
    localStorage.setItem('token', token);
    callback();
  }catch (err) {
    console.error(err);
    dispatch({type: AUTH_ERROR, payload: 'Invalid login credentials'})
  }
};