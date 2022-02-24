import {
  SET_INPUT_VALUE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CLICK_ON_BUTTON_LOGOUT,
  CLICK_ON_LOGOUT
} from '../actions/user';

export const initialState = {
  email: '',
  password: '',
  firstname: '',
  restaurant_id: '',
  token: null,
  isError: false,
  isLogged: false,
  openLogout: false
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGIN_SUCCESS:
      const { firstname, restaurant_id, accessToken } = action.data;
      return {
        ...state,
        firstname,
        restaurant_id,
        token: accessToken,
        isError: false,
        isLogged: true,
        email: '',
        password: '',
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isError: true,
      };
    case CLICK_ON_BUTTON_LOGOUT:
      return {
        ...state,
        openLogout: !state.openLogout,
      };
    case CLICK_ON_LOGOUT:
    return {
      ...state,
      email: '',
      password: '',
      firstname: '',
      restaurant_id: '',
      token: null,
      isError: false,
      isLogged: false,
      openLogout: false
    };
    default:
      return state;
  }
};

export default reducer;
