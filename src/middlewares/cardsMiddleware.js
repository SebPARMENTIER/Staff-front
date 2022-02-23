import axios from "axios";

import {
  GET_ALL_CARDS,
  createGellAllCardsSuccessAction,
  createGellAllCardsErrorAction
} from '../actions/cards';

const cardsMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case GET_ALL_CARDS: {
      const config = {
        method: 'get',
        url: 'https://seb-stan.herokuapp.com/api/v1/card',
      };
      axios(config)
        .then((response) => {
          store.dispatch(createGellAllCardsSuccessAction(response.data));
        })
        .catch(() => {
          store.dispatch(createGellAllCardsErrorAction());
        });
      break;
    }
    default:
      next(action);
  }
};

export default cardsMiddleware;