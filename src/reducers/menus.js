import {
  GET_ALL_MENUS_SUCCESS,
  GET_ALL_MENUS_ERROR
} from "../actions/menus";

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
    default:
      return state;
  }
};

export default reducer;
