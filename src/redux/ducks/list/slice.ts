import _ from 'lodash';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSlices } from '../enum';
export interface ListState {
  id: number;
  title: string;
  adding: boolean;
}

const initialState = [
  { id: 1, title: 'TODO', adding: false },
  { id: 2, title: 'In Progress', adding: false },
  { id: 3, title: 'Testing', adding: false },
  { id: 4, title: 'Done', adding: false },
] as Array<ListState>;

const listSlice = createSlice({
  name: NameSlices.LIST,
  initialState,
  reducers: {
    editTitle: (state, action: PayloadAction<{ id: number; title: string }>): Array<ListState> => {
      return _.map(state, (item) => ({
        ...item,
        title: action.payload.id === item.id ? action.payload.title : item.title,
      }));
    },
    setAddCard: (state, action: PayloadAction<number>): Array<ListState> => {
      return _.map(state, (item) => ({
        ...item,
        adding: action.payload === item.id ? !item.adding : item.adding,
      }));
    },
  },
});

export default listSlice.reducer;
export const { editTitle, setAddCard } = listSlice.actions;
