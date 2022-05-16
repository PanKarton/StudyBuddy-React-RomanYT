import { createSlice } from '@reduxjs/toolkit';

const initialErrorState = '';

export const errorSlice = createSlice({
  name: 'error',
  initialState: initialErrorState,
  reducers: {
    setErrorMessage(state, action) {
      return action.payload;
    },
  },
});

export const { setErrorMessage } = errorSlice.actions;
