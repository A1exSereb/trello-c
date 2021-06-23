import { createSelector } from 'reselect';

const selectAllLists = (state) => state.list;

export const selectLists = createSelector(selectAllLists, (allLists) => allLists);
