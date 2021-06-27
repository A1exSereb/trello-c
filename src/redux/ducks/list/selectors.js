import { createSelector } from 'reselect';
import _ from 'lodash';
import { RootState } from '../rootReducer';

const selectAllLists = (state: RootState) => state.list;

export const selectLists = createSelector((state) => state.list);

export const getListSelectorById = (state: RootState, id: number) => {
  const allLists = state.list;
  return createSelector(allLists, (allLists) => _.filter(allLists, (list) => list.id === id));
};

export const makeGetListByIdSelector = () =>
  createSelector(
    (state) => state.list,
    (_, listId) => listId,
    (listById, listId) => listById.filter((item) => item.id === listId)
  );
