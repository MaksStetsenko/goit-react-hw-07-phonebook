import { createSlice } from '@reduxjs/toolkit';

let initFilter = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initFilter,
  reducers: {
    inputFilterReducer(state, action) {
      return action.payload;
    },
    clearFilterReducer(state, action) {
      return '';
    },
  },
});

export const { inputFilterReducer, clearFilterReducer } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
