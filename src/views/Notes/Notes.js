import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/molecules/FormField/FormField';
import CircleButton from 'components/atoms/CircleButton/CircleButton';
import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  background-color: wheat;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 3rem;
  & > * {
    border: 1px solid red;
  }
`;

const Notes = (props) => {
  return (
    <Wrapper>
      <div>
        <h3>Notes</h3>
        <form>
          <FormField label="Title" name="title" id="title" />
          <FormField label="Note" name="content" id="content" type="textarea" />
          <Button>Add</Button>
        </form>
      </div>
      <div>
        <CircleButton />
        <h4>Random title</h4>
        <p>Lorem ipsum jeszcze polska nie zginęła wiesz co sie liczy szacunek ludzi ulicy</p>
      </div>
    </Wrapper>
  );
};

Notes.propTypes = {};

export default Notes;
