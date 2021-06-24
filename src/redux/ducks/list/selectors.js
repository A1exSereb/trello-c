import { createSelector } from 'reselect';

const selectAllLists = (state) => state.list;

export const selectLists = createSelector(selectAllLists, (allLists) => allLists);

export const getListSelectorById = (id) => {
  return createSelector(selectAllLists, (allLists) => _.filter(allLists, (list) => list.id === id));
};
