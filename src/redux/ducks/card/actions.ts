export const cardActionTypes = {
  ADD_CARD: 'card/ADD_CARD',
  DELETE_CARD: 'card/DELETE_CARD',
  EDIT_CARD: 'card/EDIT_CARD',
};

export const cardActions = {
  addCard: (id: number, text: string, author) => ({
    type: cardActionTypes.ADD_CARD,
    payload: { id, text, author },
  }),
  deleteCard: (payload: number) => ({
    type: cardActionTypes.DELETE_CARD,
    payload,
  }),
  editCard: (id: number, text: string) => ({
    type: cardActionTypes.EDIT_CARD,
    payload: { id, text },
  }),
};
