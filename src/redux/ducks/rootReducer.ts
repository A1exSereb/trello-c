import { combineReducers } from '@reduxjs/toolkit';
import listSlice from './list';
import authorizationSlice from './authorization';
import cardSlice from './card';
import commentSlice from './comment';
import { NameSlices } from './enum';

const Reducers = {
  [NameSlices.LIST]: listSlice,
  [NameSlices.AUTHORIZATION]: authorizationSlice,
  [NameSlices.CARD]: cardSlice,
  [NameSlices.COMMENT]: commentSlice,
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
