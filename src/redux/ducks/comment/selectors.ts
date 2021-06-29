import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

export const makeGetCommentByCardId = () =>
  createSelector(
    (state: RootState) => state.comment,
    (_, cardId: number) => cardId,
    (commentsById, cardId) => commentsById.filter((comment) => comment.recordId === cardId)
  );

export const makeGetCommentCountByCardId = () =>
  createSelector(
    (state: RootState) => state.comment,
    (_, cardId: number) => cardId,
    (commentsById, cardId) => commentsById.filter((comment) => comment.recordId === cardId).length
  );
