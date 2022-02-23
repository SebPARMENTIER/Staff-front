import {
  GET_ALL_CARDS_SUCCESS,
  GET_ALL_CARDS_ERROR
} from "../actions/cards";

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
    default:
      return state;
  }
};

export default reducer;
