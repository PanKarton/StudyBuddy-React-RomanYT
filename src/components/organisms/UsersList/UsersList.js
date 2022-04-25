import React, { useContext, useEffect, useState } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { StyledTitle } from 'components/atoms/Title/Title';
import { useParams } from 'react-router-dom';
import { GroupContext } from 'providers/ActualGroupProvider';
import { useStudents } from 'hooks/useStudents';

const UsersList = () => {
  const [students, setStudents] = useState([]);
  const { handleGroupChange } = useContext(GroupContext);
  const { groupID } = useParams();
  const { getStudents } = useStudents();

  useEffect(() => {
    (async () => {
      try {
        const data = await getStudents(groupID);
        setStudents(data);
      } catch (err) {
        console.log(err);
      }
    })();
    handleGroupChange(groupID);
    return () => {
      setStudents([]);
    };
  }, [groupID, handleGroupChange, getStudents]);

  return (
    <>
      <StyledTitle>Users list</StyledTitle>
      <StyledList>
        {students.map((student, index) => (
          <UsersListItem key={student.name} userData={student}></UsersListItem>
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
