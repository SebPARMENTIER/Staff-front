import axios from "axios";

import {
  GET_ALL_MENUS,
  createGellAllMenusSuccessAction,
  createGellAllMenusErrorAction
} from '../actions/menus';

const menusMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case GET_ALL_MENUS: {
      const config = {
        method: 'get',
        url: 'https://seb-stan.herokuapp.com/api/v1/menu',
      };
      axios(config)
        .then((response) => {
          store.dispatch(createGellAllMenusSuccessAction(response.data));
        })
        .catch(() => {
          store.dispatch(createGellAllMenusErrorAction());
        });
      break;
    }
    default:
      next(action);
  }
};

export default menusMiddleware;
