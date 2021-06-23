import { createSelector } from 'reselect';

const selectAllCards = (state) => state.card;

export const selectCardByListId = createSelector(selectAllCards, (allCards) =>
  allCards.filter((card) => card.dataId === 1)
);

export const getSelectCardById = (id) => {
  return createSelector(selectAllCards, (allCards) =>
    allCards.filter((card) => card.dataId === id)
  );
};
