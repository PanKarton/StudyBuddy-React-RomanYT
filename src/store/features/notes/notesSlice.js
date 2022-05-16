import { v4 as uuid } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

const initialNotesState = [
  {
    id: uuid(),
    title: 'Inicial Miriamcia',
    content: 'Iniitial Miriamcia content containing Miriamcia that is inicial',
  },
];

export const notesSlice = createSlice({
  name: 'notes',
  initialState: initialNotesState,
  reducers: {
    addNote(state, action) {
      // Można modyfikować stan, gdyż ponieważ działa tam tzw immer, który nas ratuje przed złymi konsekwencjami
      state.push({
        id: uuid(),
        ...action.payload,
      });
    },
    removeNote(state, action) {
      // trzeba to przefiltrowac i zrobic return
      // return dajemy gdy uzywamy metod niemutujących stanu, a nie uzywamy gdy mutujemy stan za np pomocą push, pop
      return state.filter((note) => note.id !== action.payload);
    },
  },
});

export const { addNote, removeNote } = notesSlice.actions;
