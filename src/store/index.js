import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import reducer from '../reducers';
import authMiddleware from '../middlewares/authMiddleware';
import cardsMiddleware from '../middlewares/cardsMiddleware';
import menusMiddleware from '../middlewares/menusMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMiddleware, cardsMiddleware, menusMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
