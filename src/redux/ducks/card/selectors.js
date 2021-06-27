import { createSelector } from 'reselect';

export const makeGetCardByCardIdSelector = () =>
  createSelector(
    (state) => state.card,
    (_, cardId) => cardId,
    (cardsById, cardId) => cardsById.filter((card) => card.id === cardId)
  );

export const makeGetCardByListIdSelector = () =>
  createSelector(
    (state) => state.card,
    (_, listId) => listId,
    (cardsById, listId) => cardsById.filter((item) => item.dataId === listId)
  );
