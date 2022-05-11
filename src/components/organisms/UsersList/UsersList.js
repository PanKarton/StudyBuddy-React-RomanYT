import React, { useContext, useEffect, useState } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { StyledTitle } from 'components/atoms/Title/Title';
import { useParams } from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';
import { useModal } from 'hooks/useModal';
import StudentInfoModal from '../StudentInfoModal/StudentInfoModal';
import Modal from 'components/molecules/Modal/Modal';
import { ActualGroupContext } from 'hooks/useActualGroup';

const UsersList = () => {
  const [students, setStudents] = useState([]);
  const group = useContext(ActualGroupContext);
  const { groupID } = useParams();
  const { getStudents, getStudentByID } = useStudents();
  const { isModalOpen, handleModalClose, handleModalOpen } = useModal();
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
    group.changeActualGroup(groupID);
    return () => {
      setStudents([]);
    };
  }, [groupID, group, getStudents]);

  const handleUserClick = async (id) => {
    const studentInfo = await getStudentByID(id);
    setModalStudent(studentInfo);
    handleModalOpen();
  };

  return (
    <>
      <StyledTitle>Users list</StyledTitle>
      <StyledList>
        {students.map((student, index) => (
          <UsersListItem key={index} userData={student} onClick={() => handleUserClick(student.id)}></UsersListItem>
        ))}
      </StyledList>
      <Modal handleModalClose={handleModalClose} isOpen={isModalOpen}>
        <StudentInfoModal isCloseButtonNeeded handleModalClose={handleModalClose} student={modalStudent} />
      </Modal>
    </>
  );
};

export default UsersList;
