import {
  GET_CARD_INFOS,
  CLICK_ON_BUTTON_UPDATE_CARD,
  SET_UPDATE_CARD_INPUT_VALUE,
  CREATE_UPDATE_CARD_SUCCESS,
  CREATE_UPDATE_CARD_ERROR,
  CLICK_ON_BUTTON_ESCAPE_UPDATE_CARD
} from "../actions/cards";

export const initialState = {
  cardInfos: {},
  openUpdateCardModal: false,
  cardId: '',
  newTitle: '',
  newDescription: '',
  isUpdateCardModalError: false
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_CARD_INFOS:
      return {
        ...state,
        cardInfos: action.value
      };
    case CLICK_ON_BUTTON_UPDATE_CARD:
      return {
        ...state,
        newTitle: action.value1,
        newDescription: action.value2,
        openUpdateCardModal: true
      };
    case SET_UPDATE_CARD_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value
      };
    case CREATE_UPDATE_CARD_SUCCESS:
      return {
        ...state,
        openUpdateCardModal: false,
        newTitle: '',
        newDescription: '',
        isUpdateCardModalError: false
      };
    case CREATE_UPDATE_CARD_ERROR:
      return {
        ...state,
        isUpdateCardModalError: true
      };
    case CLICK_ON_BUTTON_ESCAPE_UPDATE_CARD:
      return {
        ...state,
        openUpdateCardModal: false,
        newTitle: '',
        newDescription: '',
        isUpdateCardModalError: false
      };
    default:
      return state;
  }
};

export default reducer;
