import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface HeaderState {
  isMobileMenuOpen: boolean;
}

const initialState: HeaderState = {
  isMobileMenuOpen: false,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setMobileMenuOpen(state, action:PayloadAction<boolean>) {
      state.isMobileMenuOpen = action.payload;
    }
  }
});

export const { setMobileMenuOpen } =  headerSlice.actions;

export default headerSlice.reducer;
