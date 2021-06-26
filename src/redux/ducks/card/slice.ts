import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';

interface InitialState {
  id: number;
  dataId: number;
  label: string;
  author: string;
  description: string;
}
const initialState = [
  { id: 1, dataId: 1, label: 'todo1', author: 'test', description: 'descr' },
  { id: 2, dataId: 4, label: 'todo2', author: 'test', description: 'no descr' },
] as Array<InitialState>;

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addCard: (
      state,
      action: PayloadAction<{ id: number; text: string; author: string }>
    ): Array<InitialState> => {
      return _.concat(state, {
        id: Math.random(),
        dataId: action.payload.id,
        label: action.payload.text,
        author: action.payload.author,
        description: '',
      });
    },
    deleteCard: (state, action: PayloadAction<number>): Array<InitialState> => {
      return _.filter(state, (item) => item.id !== action.payload);
    },
    editCard: (state, action: PayloadAction<{ id: number; text: string }>): Array<InitialState> => {
      return _.map(state, (item) => ({
        ...item,
        label: action.payload.id === item.id ? action.payload.text : item.label,
      }));
    },
    editCardDescription: (
      state,
      action: PayloadAction<{ id: number; text: string }>
    ): Array<InitialState> => {
      return _.map(state, (item) => ({
        ...item,
        description: item.id === action.payload.id ? action.payload.text : item.description,
      }));
    },
    deleteCardDescription: (state, action: PayloadAction<number>): Array<InitialState> => {
      return _.map(state, (item) => ({
        ...item,
        description: item.id === action.payload ? '' : item.description,
      }));
    },
  },
});

export default cardSlice;
export const { addCard, deleteCard, editCard, editCardDescription, deleteCardDescription } =
  cardSlice.actions;
