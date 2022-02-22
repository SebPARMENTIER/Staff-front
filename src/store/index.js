import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';

import reducer from '../reducers';
import authMiddleware from '../middlewares/authMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(authMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
