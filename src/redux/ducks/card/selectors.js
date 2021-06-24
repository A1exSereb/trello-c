import { createSelector } from 'reselect';
import _ from 'lodash';

const selectAllCards = (state) => state.card;

export const getSelectCardByListId = (id) => {
  return createSelector(selectAllCards, (allCards) =>
    _.filter(allCards, (card) => card.dataId === id)
  );
};

export const getSelectCardByCardId = (id) => {
  return createSelector(selectAllCards, (allCards) => _.filter(allCards, (card) => card.id === id));
};
