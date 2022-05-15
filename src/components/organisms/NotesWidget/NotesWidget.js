import React, { useState } from 'react';
import Note from 'components/atoms/Note/Note';
import { NotesList, WidgetHandler, Wrapper } from './NotesWidget.styles';
import { useSelector } from 'react-redux';

const Noteswidget = () => {
  const [isActive, setIsActive] = useState(false);
  const notes = useSelector((state) => state.notes);

  const toggleWidget = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <Wrapper className={isActive ? 'active' : ''}>
      <NotesList>{notes ? notes.map(({ title, content, id }) => <Note key={id} id={id} title={title} content={content} />) : <p>You got no notes, create some dude...</p>}</NotesList>
      <WidgetHandler onClick={toggleWidget}>notes</WidgetHandler>
    </Wrapper>
  );
};

export default Noteswidget;
