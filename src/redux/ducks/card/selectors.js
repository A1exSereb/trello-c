import { createSelector } from 'reselect';
import _ from 'lodash';

const selectAllCards = (state) => state.card;

export const selectCardByListId = createSelector(selectAllCards, (allCards) =>
  allCards.filter((card) => card.dataId === 1)
);

export const getSelectCardById = (id) => {
  return createSelector(selectAllCards, (allCards) =>
    _.filter(allCards, (card) => card.dataId === id)
  );
};
