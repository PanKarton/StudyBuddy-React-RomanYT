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
import { useForm } from 'react-hook-form';
import axios from 'axios';

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

const UnauthenticatedApp = ({ handleAuthorizeUser, loginError }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(handleAuthorizeUser)} style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <FormField label={'login'} name={'login'} id={'login'} value="janina@wp.pl" {...register('login')} />
      <FormField label={'password'} name={'password'} id={'password'} type={'password'} {...register('password')} />
      <Button>Log in</Button>
      {loginError && <p>{loginError}</p>}
    </form>
  );
};

const Root = () => {
  const [user, setUser] = useState(null);
  const [loginError, setLogintError] = useState('');

  const handleAuthorizeUser = async ({ login, password }) => {
    const response = await axios.post('/login', { login, password });
    if (response.data.error) return setLogintError(response.data.error);
    setUser(response.data);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        </Helmet>
        <ActualGroupProvider>{user ? <AuthenticatedApp /> : <UnauthenticatedApp loginError={loginError} handleAuthorizeUser={handleAuthorizeUser} />}</ActualGroupProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
