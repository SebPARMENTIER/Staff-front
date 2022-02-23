import { combineReducers } from 'redux';

import userReducer from './user';
import cardsReducer from './cards';

const rootReducer = combineReducers({
  user: userReducer,
  cards: cardsReducer
});

export default rootReducer;
