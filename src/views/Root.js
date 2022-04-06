import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { Helmet } from 'react-helmet';
import { theme } from 'assets/styles/theme';
import { StyledWrapper } from './Root.styles';
import { usersData } from 'data/usersData';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

const initialState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [newUserInputData, setNewUserInputData] = useState(initialState);

  const deleteUser = (deleteName) => {
    const filteredUsersList = users.filter(({ name }) => name !== deleteName);
    setUsers(filteredUsersList);
  };

  const handleInputChange = (e) => {
    setNewUserInputData({
      ...newUserInputData,
      [e.target.name]: e.target.value,
    });
  };
  const addUser = (e) => {
    e.preventDefault();
    setUsers([newUserInputData, ...users]);
    setNewUserInputData(initialState);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        </Helmet>
        <MainTemplate>
          <StyledWrapper>
            <Routes>
              <Route path="/" element={<Dashboard users={users} deleteUser={deleteUser} />} />
              <Route
                path="/addStudent"
                element={<AddUser newUserInputData={newUserInputData} handleInputChange={handleInputChange} addUser={addUser} />}
              />
            </Routes>
          </StyledWrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
