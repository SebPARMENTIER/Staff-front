import { combineReducers } from 'redux';

import userReducer from './user';
import cardsReducer from './cards';
import menusReducer from './menus';

const rootReducer = combineReducers({
  user: userReducer,
  cards: cardsReducer,
  menus: menusReducer
});

export default rootReducer;
