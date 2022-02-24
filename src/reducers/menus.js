import {
  GET_ALL_MENUS_SUCCESS,
  GET_ALL_MENUS_ERROR
} from "../actions/menus";

import { CLICK_ON_LOGOUT } from '../actions/user';

export const initialState = {
  menusName: [],
  isError: false
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ALL_MENUS_SUCCESS:
      return {
        ...state,
        menusName: action.data
      };
    case GET_ALL_MENUS_ERROR:
      return {
        ...state,
        isError: true
      };
    case CLICK_ON_LOGOUT:
      return {
        ...state,
        menusName: [],
        isError: false
      };
    default:
      return state;
  }
};

export default reducer;
