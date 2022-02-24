export const GET_ALL_CARDS = 'GET_ALL_CARDS';
export const GET_ALL_CARDS_SUCCESS = 'GET_ALL_CARDS_SUCCESS';
export const GET_ALL_CARDS_ERROR = 'GET_ALL_CARDS_ERROR';
export const CLICK_ON_BUTTON_ADD_NEW_CARD = 'CLICK_ON_BUTTON_ADD_NEW_CARD';
export const SET_ADD_NEW_CARD_INPUT_VALUE ='SET_ADD_NEW_CARD_INPUT_VALUE';
export const CREATE_ADD_NEW_CARD = 'CREATE_ADD_NEW_CARD';
export const CLICK_ON_BUTTON_ESCAPE_ADD_NEW_CARD = 'CLICK_ON_BUTTON_ESCAPE_ADD_NEW_CARD';
export const CREATE_ADD_NEW_CARD_SUCCESS = 'CREATE_ADD_NEW_CARD_SUCCESS';
export const CREATE_ADD_NEW_CARD_ERROR = 'CREATE_ADD_NEW_CARD_ERROR';

export const createGetAllCardsAction = () => ({ type: GET_ALL_CARDS });

export const createGellAllCardsSuccessAction = (data) => ({ type: GET_ALL_CARDS_SUCCESS, data});

export const createGellAllCardsErrorAction = () => ({ type: GET_ALL_CARDS_ERROR });

export const clickOnButtonAddNewCard = () => ({ type: CLICK_ON_BUTTON_ADD_NEW_CARD });

export const createAddNewCardSetInputValueAction = (newValue, name) => ({
  type: SET_ADD_NEW_CARD_INPUT_VALUE,
  value: newValue,
  name: name
});

export const createAddNewCardAction = () => ({ type: CREATE_ADD_NEW_CARD });

export const clickOnButtonEscapeAddNewCard = () => ({ type: CLICK_ON_BUTTON_ESCAPE_ADD_NEW_CARD });

export const createAddNewCardSuccesAction = () => ({ type: CREATE_ADD_NEW_CARD_SUCCESS });

export const createAddNewCardErrorAction = () => ({ type: CREATE_ADD_NEW_CARD_ERROR });
