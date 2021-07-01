import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSlices } from '../enum';

interface AuthorizationState {
  name: string;
  logged: boolean;
}
const initialState = {
  name: '',
  logged: false,
} as AuthorizationState;

const authorizationSlice = createSlice({
  name: NameSlices.AUTHORIZATION,
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<string>): void => {
      (state.name = action.payload), (state.logged = true);
    },
  },
});
export default authorizationSlice.reducer;
export const { logIn } = authorizationSlice.actions;
