import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  name: string | null;
  logged: boolean;
}
const initialState = {
  name: null,
  logged: false,
} as InitialState;

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<string>): void => {
      (state.name = action.payload), (state.logged = true);
    },
  },
});
export default authorizationSlice;
export const { logIn } = authorizationSlice.actions;
