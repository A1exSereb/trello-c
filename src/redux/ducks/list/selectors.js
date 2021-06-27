import { createSelector } from 'reselect';

export const selectLists = createSelector(
  (state) => state.list,
  (allLists) => allLists
);

export const makeGetListByIdSelector = () =>
  createSelector(
    (state) => state.list,
    (_, listId) => listId,
    (listById, listId) => listById.filter((item) => item.id === listId)
  );
