import { createSelector, OutputSelector } from 'reselect';
import _ from 'lodash';
import { InitialState } from './slice';
import { RootState } from '../rootReducer';

const selectAllLists = (state: RootState) => state.list;

export const selectLists = createSelector(selectAllLists, (allLists) => allLists);

export const getListSelectorById = (id: number): OutputSelector<> => {
  return createSelector(selectAllLists, (allLists) => _.filter(allLists, (list) => list.id === id));
};
