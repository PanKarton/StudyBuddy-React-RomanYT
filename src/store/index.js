import { createStore } from 'redux';
import { v4 as uuid } from 'uuid';

export const addNote = (payload) => {
  return {
    type: 'notes/add',
    payload: { ...payload, id: uuid() },
  };
};

export const removeNote = (payload) => {
  return {
    type: 'notes/remove',
    payload,
  };
};

const initialState = {
  notes: [],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'notes/add':
      return {
        ...state,
        notes: [...state.notes, action.payload],
        id: action.id,
      };
    case 'notes/remove':
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    default:
      return state;
  }
};

export const store = createStore(notesReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
