import React from 'react';
import PropTypes from 'prop-types';
import Note from 'components/atoms/Note/Note';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  position: fixed;
  right: 0;
  top: 10vh;
  border: 3px solid ${({ theme }) => theme.colors.darkGrey};
  border-right: none;
  width: 30vw;
`;

const NotesList = styled.ul`
  /* padding: 0 */
  margin: 0;
  padding: 2rem;
  max-height: 70vh;
  overflow-y: scroll;
  & > * + * {
    margin-top: 2rem;
  }
`;

const WidgetHandler = styled.button`
  position: absolute;
  left: -3.5rem;
  top: 2rem;
  width: 5rem;
  height: 2rem;
  background-color: #555;
  border: none;
  padding: 0;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  cursor: pointer;
  margin: 0;
  transform: rotate(-90deg);
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const Noteswidget = (props) => {
  return (
    <Wrapper>
      <NotesList>
        <Note title="Czesc jestem jaś" content="Sorry mała ale musze wczesnie wstac" />
        <Note title="Czesc jestem jaś" content="Sorry mała ale musze wczesnie wstac" />
        <Note title="Czesc jestem jaś" content="Sorry mała ale musze wczesnie wstac" />
      </NotesList>
      <WidgetHandler>notes</WidgetHandler>
    </Wrapper>
  );
};

Noteswidget.propTypes = {};

export default Noteswidget;
