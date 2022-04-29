import React, { useEffect, useState } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import { Navigate, useParams } from 'react-router-dom';
import { GroupButton, GroupWrapper, MainContainer, StyledHeader } from './DashBoard.styles';
import { RiArrowRightSLine } from 'react-icons/ri';
import GroupModal from 'components/organisms/GroupModal/GroupModal';
import { useStudents } from 'hooks/useStudents';
import { useModal } from 'hooks/useModal';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const { groupID } = useParams();
  const { getGroups } = useStudents();
  const { Modal, isModalOpen, handleModalClose, handleModalOpen } = useModal();

  useEffect(() => {
    // Get groups i get students pochodzą z hooka useStudents, który ma w sobie funkcje zwracajace promisa
    // z danymi
    (async () => {
      const data = await getGroups();
      setGroups(data);
    })();
  }, [getGroups]);

  if (!groupID && groups.length > 0) return <Navigate to={`/group/${groups[0]}`} replace />;

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
      {isModalOpen ? (
        <Modal>
          <GroupModal groups={groups} handleModalClose={handleModalClose} isCloseButtonNeeded={false} />
        </Modal>
      ) : null}
    </>
  );
};

export default Dashboard;
