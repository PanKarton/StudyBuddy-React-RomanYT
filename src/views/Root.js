import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { Helmet } from 'react-helmet';
import { theme } from 'assets/styles/theme';
import { StyledWrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUserForm/AddUserForm';
import Dashboard from './Dashboard/Dashboard';
import ActualGroupProvider from 'providers/ActualGroupProvider';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const AuthenticatedApp = () => (
  <MainTemplate>
    <StyledWrapper>
      <Routes>
        <Route path="/" element={<Navigate to={`/group`} replace />} />
        <Route path={`/group`}>
          <Route path={`:groupID`} element={<Dashboard />} />
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path="/addStudent" element={<AddUser />} />
      </Routes>
    </StyledWrapper>
  </MainTemplate>
);

const UnauthenticatedApp = () => (
  <form style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <FormField label={'login'} name={'login'} id={'login'} />
    <FormField label={'password'} name={'password'} id={'password'} type={'password'} />
    <Button>Log in</Button>
  </form>
);

const Root = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        </Helmet>
        <ActualGroupProvider>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</ActualGroupProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
