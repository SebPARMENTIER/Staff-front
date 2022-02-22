export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const createSetInputValueAction = (newValue, name) => ({
  type: SET_INPUT_VALUE,
  value: newValue,
  name: name,
});

export const createSubmitAction = () => ({ type: SUBMIT_LOGIN });

export const createLoginSuccessAction = (data) => ({ type: LOGIN_SUCCESS, data });

export const createLoginErrorAction = () => ({ type: LOGIN_ERROR });
