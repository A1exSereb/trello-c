import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

export const authorizationSelector = createSelector(
  (state: RootState) => state.authorization,
  (authorization) => authorization
);
