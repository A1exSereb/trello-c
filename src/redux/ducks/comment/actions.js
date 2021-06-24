export const commentActionTypes = {
  ADD_COMMENT: 'comment/ADD_COMMENT',
  DELETE_COMMENT: 'comment/DELETE_COMMENT',
  EDIT_COMMENT: 'comment/EDIT_COMMENT',
};

export const commentActions = {
  addComment: (recordId: number, name: string, label: string) => ({
    type: commentActionTypes.ADD_COMMENT,
    payload: { recordId, name, label },
  }),
  deleteComment: (payload: number) => ({
    type: commentActionTypes.DELETE_COMMENT,
    payload,
  }),
  editComment: (id: number, label: string) => ({
    type: commentActionTypes.EDIT_COMMENT,
    payload: { id, label },
  }),
};
