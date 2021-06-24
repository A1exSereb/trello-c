export const cardActionTypes = {
  ADD_CARD: 'card/ADD_CARD',
  DELETE_CARD: 'card/DELETE_CARD',
  EDIT_CARD: 'card/EDIT_CARD',
  EDIT_CARD_DESCRIPTION: 'card/EDIT_CARD_DESCRIPTION',
  DELETE_CARD_DESCRIPTION: 'card/DELETE_CARD_DESCRIPTION',
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
  editDescription: (id: number, text: string) => ({
    type: cardActionTypes.EDIT_CARD_DESCRIPTION,
    payload: { id, text },
  }),
  deleteDescription: (payload: number) => ({
    type: cardActionTypes.DELETE_CARD_DESCRIPTION,
    payload,
  }),
};
