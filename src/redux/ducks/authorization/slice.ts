import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthorizationState {
  name: string;
  logged: boolean;
}
const initialState = {
  name: '',
  logged: false,
} as AuthorizationState;

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<string>): void => {
      (state.name = action.payload), (state.logged = true);
    },
  },
});
export default authorizationSlice.reducer;
export const { logIn } = authorizationSlice.actions;
