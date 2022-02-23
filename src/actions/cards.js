export const GET_ALL_CARDS = 'GET_ALL_CARDS';
export const GET_ALL_CARDS_SUCCESS = 'GET_ALL_CARDS_SUCCESS';
export const GET_ALL_CARDS_ERROR = 'GET_ALL_CARDS_ERROR';

export const createGetAllCardsAction = () => ({ type: GET_ALL_CARDS });

export const createGellAllCardsSuccessAction = (data) => ({ type: GET_ALL_CARDS_SUCCESS, data});

export const createGellAllCardsErrorAction = () => ({ type: GET_ALL_CARDS_ERROR });
