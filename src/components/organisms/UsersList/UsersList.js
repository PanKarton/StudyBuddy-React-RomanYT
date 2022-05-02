import React, { useContext, useEffect, useState } from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { StyledTitle } from 'components/atoms/Title/Title';
import { useParams } from 'react-router-dom';
import { GroupContext } from 'providers/ActualGroupProvider';
import { useStudents } from 'hooks/useStudents';
import { useModal } from 'hooks/useModal';
import StudentInfoModal from '../StudentInfoModal/StudentInfoModal';
import Modal from 'components/molecules/Modal/Modal';

const mockStudent = {
  id: '19',
  name: 'Miriamcia Łagód',
  attendance: '100%',
  average: '6',
  course: 'Inżynier społeczny w 30 dni',
  subjectsGrades: [
    {
      subject: 'Majma i sen',
      grade: '5',
    },
    {
      subject: 'Historia spułczesna',
      grade: '3.5',
    },
    {
      subject: 'Astrologia i minerały',
      grade: '2.5',
    },
  ],
};

const UsersList = () => {
  const [students, setStudents] = useState([]);
  const { handleGroupChange } = useContext(GroupContext);
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
    handleGroupChange(groupID);
    return () => {
      setStudents([]);
    };
  }, [groupID, handleGroupChange, getStudents]);

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
        <StudentInfoModal isCloseButtonNeeded handleModalClose={handleModalClose} student={mockStudent} />
      </Modal>
    </>
  );
};

export default UsersList;
