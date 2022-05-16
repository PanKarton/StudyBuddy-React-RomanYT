import { configureStore } from '@reduxjs/toolkit';
import { errorSlice } from './features/error/errorSlice';
import { notesSlice } from './features/notes/notesSlice';

// Tutaj ustawiamy basically co będzie w naszym store, tzn co wyciągniemy zeń za pomocą useSelector
export const store = configureStore({
  reducer: {
    notes: notesSlice.reducer,
    error: errorSlice.reducer,
  },
});
