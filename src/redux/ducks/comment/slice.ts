import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import { NameSlices } from '../enum';

interface CommentState {
  id: number;
  recordId: number;
  author: string;
  label: string;
}
const initialState = [
  { id: 1, recordId: 1, author: 'Oleg', label: 'comment1' },
] as Array<CommentState>;

const commentSlice = createSlice({
  name: NameSlices.COMMENT,
  initialState,
  reducers: {
    deleteComment: (state, action: PayloadAction<number>): Array<CommentState> => {
      return _.filter(state, (item) => item.id !== action.payload);
    },
    addComment: (
      state,
      action: PayloadAction<{ recordId: number; label: string; name: string }>
    ): Array<CommentState> => {
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
    ): Array<CommentState> => {
      return _.map(state, (item) => ({
        ...item,
        label: item.id === action.payload.id ? action.payload.label : item.label,
      }));
    },
  },
});

export default commentSlice.reducer;
export const { deleteComment, addComment, editComment } = commentSlice.actions;
