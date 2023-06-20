import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    onFilter(state, action) {
      return (state = action.payload.toLowerCase());
    },
  },
});

// Selectors
export const getFilterState = state => state.filter;

export const { onFilter } = filterSlice.actions;

export default filterSlice.reducer;
