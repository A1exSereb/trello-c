import { createSelector } from 'reselect';
import _ from 'lodash';
const selectAllComments = (state) => state.comment;

export const getSelectCommentsById = (id) => {
  return createSelector(selectAllComments, (allComments) =>
    _.filter(allComments, (comment) => comment.recordId === id)
  );
};
