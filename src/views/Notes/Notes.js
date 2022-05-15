import React from 'react';
import Note from 'components/atoms/Note/Note';
import { NotesList, Wrapper } from './Notes.styles';
import AddNoteForm from 'components/organisms/AddNoteForm/AddNoteForm';
import { useSelector } from 'react-redux';

const Notes = (props) => {
  const notes = useSelector((state) => state.notes);

  return (
    <Wrapper>
      <h3>Notes</h3>
      <AddNoteForm />
      <NotesList>{notes.length > 0 ? notes.map(({ title, content, id }) => <Note key={id} id={id} title={title} content={content} />) : <p>You got no notes, create some dude...</p>}</NotesList>
    </Wrapper>
  );
};

Notes.propTypes = {};

export default Notes;
