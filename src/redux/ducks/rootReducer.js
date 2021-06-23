import { combineReducers } from '@reduxjs/toolkit';
import listReducer from './list';
import authorizationReducer from './authorization';
import cardReducer from './card';
import commentReducer from './comment';

const rootReducer = combineReducers({
  authorization: authorizationReducer,
  list: listReducer,
  card: cardReducer,
  comment: commentReducer,
});

export default rootReducer;
