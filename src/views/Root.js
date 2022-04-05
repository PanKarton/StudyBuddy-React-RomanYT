import UsersList from 'components/organisms/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { Helmet } from 'react-helmet';
import { theme } from 'assets/styles/theme';
import AddUserForm from 'components/organisms/AddUserForm/AddUserForm';
import { StyledWrapper } from './Root.styles';
import { usersData } from 'data/usersData';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
        <StyledWrapper>
          <Routes>
            <Route path="/" element={<AddUserForm newUserInputData={newUserInputData} handleInputChange={handleInputChange} addUser={addUser} />} />
            <Route path="/addUser" element={<UsersList users={users} deleteUser={deleteUser} />} />
          </Routes>
        </StyledWrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
