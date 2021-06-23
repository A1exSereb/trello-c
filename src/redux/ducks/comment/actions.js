export const commentActionTypes = {
  ADD_COMMENT: 'comment/ADD_CARD',
};

export const commentActions = {
  addCard: (recordId: number, name: string, label: string) => ({
    type: commentActionTypes.ADD_COMMENT,
    payload: { recordId, name, label },
  }),
};

export default commentActions;
