import {
  GET_ALL_CARDS_SUCCESS,
  GET_ALL_CARDS_ERROR
} from "../actions/cards";

import { CLICK_ON_LOGOUT } from '../actions/user';

export const initialState = {
  cardsName: [],
  isError: false
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ALL_CARDS_SUCCESS:
      return {
        ...state,
        cardsName: action.data
      };
    case GET_ALL_CARDS_ERROR:
      return {
        ...state,
        isError: true
      };
    case CLICK_ON_LOGOUT:
      return {
        ...state,
        cardsName: [],
        isError: false
      };
    default:
      return state;
  }
};

export default reducer;
