import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (state, { payload }) => {
      return payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { changeFilter } = filterSlice.actions;
