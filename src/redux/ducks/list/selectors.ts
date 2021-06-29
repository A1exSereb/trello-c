import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

export const selectLists = createSelector(
  (state: RootState) => state.list,
  (allLists) => allLists
);

export const makeGetListByIdSelector = () =>
  createSelector(
    (state: RootState) => state.list,
    (_, listId: RootState) => listId,
    (listById, listId) => listById.filter((item) => item.id === listId)
  );
