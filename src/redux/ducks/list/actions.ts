export const listActionTypes = {
  EDIT_TITLE: 'list/EDIT_TITLE',
  SET_ADD_CARD: 'list/SET_ADD_CARD',
};

export const listActions = {
  editTitle: (id: number, text: string) => ({
    type: listActionTypes.EDIT_TITLE,
    payload: { id, text },
  }),
  setAddCard: (payload) => ({
    type: listActionTypes.SET_ADD_CARD,
    payload,
  }),
};
