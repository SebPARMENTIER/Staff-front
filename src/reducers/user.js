import {
  SET_INPUT_VALUE,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from '../actions/user';

export const initialState = {
  email: '',
  password: '',
  firstname: '',
  token: null,
  isError: false,
  isLogged: false
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGIN_SUCCESS:
      const { firstname, accessToken } = action.data;
      return {
        ...state,
        firstname: firstname,
        token: accessToken,
        isError: false,
        islogged: true,
        email: '',
        password: '',
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};

export default reducer;
