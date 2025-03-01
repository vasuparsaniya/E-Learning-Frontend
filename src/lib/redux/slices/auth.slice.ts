import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type AuthSliceType = {
  isAuthenticate: boolean;
};

const authInitialState: AuthSliceType = {
  isAuthenticate: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setIsAuthenticate: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticate = action.payload;
    },
  },
});

export const { setIsAuthenticate } = authSlice.actions;

export const getIsAuthenticate = (state: RootState) =>
  state.auth.isAuthenticate;

export default authSlice.reducer;
