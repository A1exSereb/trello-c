import { createSelector } from 'reselect';

const selectAllComments = (state) => state.comment;

export const getSelectCommentsById = (id) => {
  return createSelector(selectAllComments, (allComments) =>
    allComments.filter((comment) => comment.recordId === id)
  );
};
