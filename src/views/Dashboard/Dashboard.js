import React, { useContext, useEffect, useState } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { GroupButton, GroupWrapper, MainContainer, StyledHeader } from './DashBoard.styles';
import { RiArrowRightSLine } from 'react-icons/ri';
import { GroupContext } from 'providers/ActualGroupProvider';
import Modal from 'components/organisms/Modal/Modal';
import GroupModal from 'components/organisms/GroupModal/GroupModal';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { groupID } = useParams();
  const { handleGroupChange } = useContext(GroupContext);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    axios
      .get(`/groups`)
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${groupID === ':groupID' ? groups[0] : groupID}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
    handleGroupChange(groupID);
  }, [groupID, groups, handleGroupChange]);

  return (
    <MainContainer>
      <GroupWrapper>
        <StyledHeader>{`Group ${groupID === ':groupID' ? groups[0] : groupID}`}</StyledHeader>
        <GroupButton>
          Change group <RiArrowRightSLine />
        </GroupButton>
        <Modal isOpen={isOpen}>
          <GroupModal groups={groups} />
        </Modal>
      </GroupWrapper>
      <ViewWrapper>
        <UsersList users={students} />
      </ViewWrapper>
    </MainContainer>
  );
};

export default Dashboard;
