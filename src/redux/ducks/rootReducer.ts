import { combineReducers } from '@reduxjs/toolkit';
import listSlice from './list';
import authorizationSlice from './authorization';
import cardSlice from './card';
import commentSlice from './comment';

const rootReducer = combineReducers({
  authorization: authorizationSlice.reducer,
  list: listSlice.reducer,
  card: cardSlice.reducer,
  comment: commentSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
