import React, { useContext, useEffect, useState } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { StyledTitle } from 'components/atoms/Title/Title';
import { useParams } from 'react-router-dom';
import { GroupContext } from 'providers/ActualGroupProvider';
import { useStudents } from 'hooks/useStudents';
import { useModal } from 'hooks/useModal';
import StudentInfoModal from '../StudentInfoModal/StudentInfoModal';

const UsersList = () => {
  const [students, setStudents] = useState([]);
  const { handleGroupChange } = useContext(GroupContext);
  const { groupID } = useParams();
  const { getStudents } = useStudents();
  const { Modal, isModalOpen, handleModalClose, handleModalOpen } = useModal();
  const [modalStudent, setModalStudent] = useState({});

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

  const handleUserClick = (student) => {
    handleModalOpen();
    setModalStudent(student);
  };

  return (
    <>
      <StyledTitle>Users list</StyledTitle>
      <StyledList>
        {students.map((student, index) => (
          <UsersListItem key={index} userData={student} onClick={() => handleUserClick(student)}></UsersListItem>
        ))}
      </StyledList>
      {isModalOpen ? (
        <Modal>
          <StudentInfoModal isCloseButtonNeeded handleModalClose={handleModalClose} studentInfo={modalStudent} />
        </Modal>
      ) : null}
    </>
  );
};

export default UsersList;
