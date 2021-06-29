import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

export const makeGetCardByCardIdSelector = () =>
  createSelector(
    (state: RootState) => state.card,
    (_, cardId: number) => cardId,
    (cardsById, cardId) => cardsById.filter((card) => card.id === cardId)
  );

export const makeGetCardByListIdSelector = () =>
  createSelector(
    (state: RootState) => state.card,
    (_, listId: number) => listId,
    (cardsById, listId) => cardsById.filter((item) => item.dataId === listId)
  );
