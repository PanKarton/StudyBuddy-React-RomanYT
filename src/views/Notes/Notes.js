import React from 'react';
import Note from 'components/atoms/Note/Note';
import { AddNoteWrapper, NotesList, Wrapper } from './Notes.styles';
import AddNoteForm from 'components/organisms/AddNoteForm/AddNoteForm';

const Notes = (props) => {
  return (
    <Wrapper>
      <h3>Notes</h3>
      <AddNoteForm />
      <NotesList>
        <Note title="Czesc jestem jaś" content="Sorry mała ale musze wczesnie wstac" />
        <Note title="Czesc jestem jaś" content="Sorry mała ale musze wczesnie wstac" />
        <Note title="Czesc jestem jaś" content="Sorry mała ale musze wczesnie wstac" />
        <Note title="Czesc jestem jaś" content="Sorry mała ale musze wczesnie wstac" />
      </NotesList>
    </Wrapper>
  );
};

Notes.propTypes = {};

export default Notes;
