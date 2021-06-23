import { authorizationActionTypes } from './actions';

interface StateTypes {
  name: string | null;
  logged: boolean;
}
const initialState: StateTypes = {
  name: null,
  logged: false,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case authorizationActionTypes.LOG_IN:
      return { name: action.payload, logged: true };
    default:
      return state;
  }
};

export default listReducer;
