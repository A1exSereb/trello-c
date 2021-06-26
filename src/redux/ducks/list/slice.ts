import _ from 'lodash';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface InitialState {
  id: number;
  title: string;
  adding: boolean;
}
interface EditTitle {
  id: number;
  title: string;
}
const initialState = [
  { id: 1, title: 'TODO', adding: false },
  { id: 2, title: 'In Progress', adding: false },
  { id: 3, title: 'Testing', adding: false },
  { id: 4, title: 'Done', adding: false },
] as Array<InitialState>;

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    editTitle: (state, action: PayloadAction<EditTitle>): Array<InitialState> => {
      return _.map(state, (item) => ({
        ...item,
        title: action.payload.id === item.id ? action.payload.title : item.title,
      }));
    },
    setAddCard: (state, action: PayloadAction<number>): Array<InitialState> => {
      return _.map(state, (item) => ({
        ...item,
        adding: action.payload === item.id ? !item.adding : item.adding,
      }));
    },
  },
});

export default listSlice;
export const { editTitle, setAddCard } = listSlice.actions;
