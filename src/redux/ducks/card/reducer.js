import { cardActionTypes } from './actions';
import _ from 'lodash';

const initialState = [
  { id: 1, dataId: 1, label: 'todo1', author: 'test', description: 'descr' },
  { id: 2, dataId: 4, label: 'todo2', author: 'test', description: 'no descr' },
];

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case cardActionTypes.ADD_CARD:
      return _.concat(state, {
        id: Math.random(),
        dataId: action.payload.id,
        label: action.payload.text,
        author: action.payload.author,
        description: '',
      });
    case cardActionTypes.DELETE_CARD:
      return _.filter(state, (item) => item.id !== action.payload);
    case cardActionTypes.EDIT_CARD:
      return _.map(state, (item) => ({
        ...item,
        label: action.payload.id === item.id ? action.payload.text : item.label,
      }));
    default:
      return state;
  }
};

export default cardReducer;
