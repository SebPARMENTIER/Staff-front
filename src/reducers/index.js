import { combineReducers } from 'redux';

import userReducer from './user';
import cardsReducer from './cards';
import cardReducer from './card';
import menusReducer from './menus';

const rootReducer = combineReducers({
  user: userReducer,
  cards: cardsReducer,
  card: cardReducer,
  menus: menusReducer
});

export default rootReducer;
