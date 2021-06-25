import { combineReducers } from '@reduxjs/toolkit';
import listSlice from './list';
import authorizationReducer from './authorization';
import cardReducer from './card';
import commentReducer from './comment';

const rootReducer = combineReducers({
  authorization: authorizationReducer,
  list: listSlice.reducer,
  card: cardReducer,
  comment: commentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
