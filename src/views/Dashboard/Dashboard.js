import React, { useContext, useEffect, useState } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { GroupButton, GroupWrapper, MainContainer, StyledHeader } from './DashBoard.styles';
import { RiArrowRightSLine } from 'react-icons/ri';
import { GroupContext } from 'providers/ActualGroupProvider';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { groupID } = useParams();
  const { handleGroupChange } = useContext(GroupContext);

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
  }, [groupID, groups]);

  return (
    <MainContainer>
      <GroupWrapper>
        <StyledHeader>{`Group ${groupID === ':groupID' ? groups[0] : groupID}`}</StyledHeader>
        <GroupButton>
          Change group <RiArrowRightSLine />
        </GroupButton>
        {groups.map((group) => (
          <Link key={group} to={`/group/${group}?`}>
            {group}
          </Link>
        ))}
      </GroupWrapper>
      <ViewWrapper>
        <UsersList users={students} />
      </ViewWrapper>
    </MainContainer>
  );
};

export default Dashboard;
