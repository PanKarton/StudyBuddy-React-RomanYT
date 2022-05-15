import React, { useEffect, useState } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import { Navigate, useParams } from 'react-router-dom';
import { GroupButton, GroupWrapper, MainContainer, StyledHeader } from './DashBoard.styles';
import { RiArrowRightSLine } from 'react-icons/ri';
import GroupModal from 'components/organisms/GroupModal/GroupModal';
import { useStudents } from 'hooks/useStudents';
import { useModal } from 'hooks/useModal';
import Modal from 'components/molecules/Modal/Modal';
import { useActualGroup } from 'hooks/useActualGroup';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const { groupID } = useParams();
  const { getGroups } = useStudents();
  const { isModalOpen, handleModalClose, handleModalOpen } = useModal();
  const { changeActualGroup } = useActualGroup();

  useEffect(() => {
    (async () => {
      const data = await getGroups();
      setGroups(data);
    })();
  }, [getGroups]);

  if (!groupID && groups.length > 0) {
    changeActualGroup(groups[0]);
    return <Navigate to={`/group/${groups[0]}`} replace />;
  }

  return (
    <>
      <MainContainer>
        <GroupWrapper>
          <StyledHeader>{`Group ${groupID === undefined ? groups[0] : groupID}`}</StyledHeader>
          <GroupButton onClick={handleModalOpen}>
            Change group <RiArrowRightSLine />
          </GroupButton>
        </GroupWrapper>
        <ViewWrapper>
          <UsersList />
        </ViewWrapper>
      </MainContainer>
      <Modal isOpen={isModalOpen} handleModalClose={handleModalClose}>
        <GroupModal groups={groups} handleModalClose={handleModalClose} isCloseButtonNeeded={false} />
      </Modal>
    </>
  );
};

export default Dashboard;
