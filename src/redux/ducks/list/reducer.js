import { listActionTypes } from './actions';
import _ from 'lodash';

const initialState = [
  { id: 1, title: 'TODO', adding: false },
  { id: 2, title: 'In Progress', adding: false },
  { id: 3, title: 'Testing', adding: false },
  { id: 4, title: 'Done', adding: false },
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case listActionTypes.EDIT_TITLE:
      return _.map(state, (item) => ({
        ...item,
        title: action.payload.id === item.id ? action.payload.text : item.title,
      }));
    case listActionTypes.SET_ADD_CARD:
      return _.map(state, (item) => ({
        ...item,
        adding: action.payload === item.id ? !item.adding : item.adding,
      }));
    default:
      return state;
  }
};

export default listReducer;
