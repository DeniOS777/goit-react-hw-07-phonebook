import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter(_, { payload }) {
      return payload;
    },
    resetFilter() {
      return initialState;
    },
  },
});

export const { changeFilter, resetFilter } = filterSlice.actions;
