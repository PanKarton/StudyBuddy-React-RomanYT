import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/atoms/Button/Button';
import { StyledHeader } from 'views/Dashboard/DashBoard.styles';
import { GroupList, StyledWrapper } from './GroupModal.styles';
import { Link } from 'react-router-dom';

const GroupModal = ({ groups = [], handleModalClose, isCloseButtonNeeded }) => {
  const [selectedGroup, setSelectedGroup] = useState('');

  return (
    <StyledWrapper>
      <StyledHeader>Select a group</StyledHeader>
      <p>Group</p>
      <GroupList>
        {groups.map((group, index) => (
          <li key={index} onClick={() => setSelectedGroup(group)}>
            <p>{group}</p>
          </li>
        ))}
      </GroupList>
      {selectedGroup ? (
        <Link to={`/group/${selectedGroup}?`}>
          <Button onClick={handleModalClose}>Select</Button>
        </Link>
      ) : null}
      {isCloseButtonNeeded ? <Button onClick={handleModalClose}>Close</Button> : null}
    </StyledWrapper>
  );
};

GroupModal.propTypes = {
  group: PropTypes.array,
  handleModalToggle: PropTypes.func,
};

export default GroupModal;
