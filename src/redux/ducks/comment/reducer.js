import _ from 'lodash';
import { commentActionTypes } from './actions';
const initialState = [{ id: 1, recordId: 1, author: 'Oleg', label: 'comment1' }];

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case commentActionTypes.DELETE_COMMENT:
      return _.filter(state, (item) => item.id !== action.payload);
    case commentActionTypes.ADD_COMMENT:
      return _.concat(state, {
        id: Math.random(),
        recordId: action.payload.recordId,
        label: action.payload.label,
        author: action.payload.name,
      });
    case commentActionTypes.EDIT_COMMENT:
      return _.map(state, (item) => ({
        ...item,
        label: item.id === action.payload.id ? action.payload.label : item.label,
      }));
    default:
      return state;
  }
};

export default commentReducer;
