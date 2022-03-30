import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './AverageCircle.styles';

const AverageCircle = ({ average }) => (
  <Wrapper average={average}>
    <span>{average}</span>
  </Wrapper>
);

export default AverageCircle;
