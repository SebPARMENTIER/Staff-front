import axios from "axios";

import {
  GET_ALL_CARDS,
  CREATE_ADD_NEW_CARD,
  CREATE_UPDATE_CARD,
  createGellAllCardsSuccessAction,
  createGellAllCardsErrorAction,
  createAddNewCardSuccesAction,
  createAddNewCardErrorAction,
  createGetAllCardsAction,
  createUpdateCardSuccesAction,
  createUpdateCardErrorAction
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
    case CREATE_UPDATE_CARD: {
      const config = {
        method: 'patch',
        url: 'https://seb-stan.herokuapp.com/api/v1/card',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${state.user.token}`,
        },
        data: {
          id: state.card.cardInfos.id,
          title: state.card.newTitle,
          description: state.card.newDescription,
        },
      };
      axios(config)
        .then((response) => {
          store.dispatch(createUpdateCardSuccesAction());
          store.dispatch(createGetAllCardsAction());
        })
        .catch(() => {
          store.dispatch(createUpdateCardErrorAction())
        });
      break;
    };
    default:
      next(action);
  }
};

export default cardsMiddleware;
