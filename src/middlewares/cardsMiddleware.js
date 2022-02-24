import axios from "axios";

import {
  GET_ALL_CARDS,
  CREATE_ADD_NEW_CARD,
  createGellAllCardsSuccessAction,
  createGellAllCardsErrorAction,
  createAddNewCardSuccesAction,
  createAddNewCardErrorAction,
  createGetAllCardsAction
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
    };
    case CREATE_ADD_NEW_CARD: {
      const config = {
        method: 'post',
        url: 'https://seb-stan.herokuapp.com/api/v1/card',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.user.token}`,
        },
        data: {
          title: state.cards.title,
          description: state.cards.description,
          restaurant_id: state.user.restaurant_id
        },
      };
      axios(config)
        .then((response) => {
          store.dispatch(createAddNewCardSuccesAction());
          store.dispatch(createGetAllCardsAction());
        })
        .catch(() => {
          store.dispatch(createAddNewCardErrorAction())
        });
      break;
    };
    default:
      next(action);
  }
};

export default cardsMiddleware;
