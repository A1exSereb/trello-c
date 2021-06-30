import { combineReducers } from '@reduxjs/toolkit';
import listSlice from './list';
import authorizationSlice from './authorization';
import cardSlice from './card';
import commentSlice from './comment';

const Reducers = {
  list: listSlice,
  authorization: authorizationSlice,
  card: cardSlice,
  comment: commentSlice,
};
const { list, authorization, card, comment } = Reducers;

const rootReducer = combineReducers({
  authorization,
  list,
  card,
  comment,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
