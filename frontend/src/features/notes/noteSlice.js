import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import noteService from './noteService';

const initialState = {
  notes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  messages: '',
};

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {},
});

export const { reset } = noteSlice.actions;

export default noteSlice.reducer;