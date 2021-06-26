import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

interface InitialState {
  id: number;
  recordId: number;
  author: string;
  label: string;
}
const initialState = [
  { id: 1, recordId: 1, author: 'Oleg', label: 'comment1' },
] as Array<InitialState>;

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    deleteComment: (state, action: PayloadAction<number>): Array<InitialState> => {
      return _.filter(state, (item) => item.id !== action.payload);
    },
    addComment: (
      state,
      action: PayloadAction<{ recordId: number; label: string; name: string }>
    ): Array<InitialState> => {
      return _.concat(state, {
        id: Math.random(),
        recordId: action.payload.recordId,
        label: action.payload.label,
        author: action.payload.name,
      });
    },
    editComment: (
      state,
      action: PayloadAction<{ id: number; label: string }>
    ): Array<InitialState> => {
      return _.map(state, (item) => ({
        ...item,
        label: item.id === action.payload.id ? action.payload.label : item.label,
      }));
    },
  },
});

export default commentSlice;
export const { deleteComment, addComment, editComment } = commentSlice.actions;
