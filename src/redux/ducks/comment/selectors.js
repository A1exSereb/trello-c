import { createSelector } from 'reselect';

export const makeGetCommentByCardId = () =>
  createSelector(
    (state) => state.comment,
    (_, cardId) => cardId,
    (commentsById, cardId) => commentsById.filter((comment) => comment.recordId === cardId)
  );

export const makeGetCommentCountByCardId = () =>
  createSelector(
    (state) => state.comment,
    (_, cardId) => cardId,
    (commentsById, cardId) => commentsById.filter((comment) => comment.recordId === cardId).length
  );
