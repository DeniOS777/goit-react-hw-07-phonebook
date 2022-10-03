import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (_, { payload }) => payload,
    resetFilter: () => initialState,
  },
});

export const { changeFilter, resetFilter } = filterSlice.actions;
