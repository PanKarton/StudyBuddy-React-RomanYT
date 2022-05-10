import React from 'react';
import { StyledWrapper } from './Root.styles';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from '../AddUserForm/AddUserForm';
import Dashboard from '../Dashboard/Dashboard';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import { useError } from 'hooks/useError';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';

const AuthenticatedApp = () => {
  return (
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
};

const UnauthenticatedApp = () => {
  const { register, handleSubmit } = useForm();
  const { signIn } = useAuth();

  return (
    <form onSubmit={handleSubmit(signIn)} style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <FormField label={'login'} name={'login'} id={'login'} {...register('login')} />
      <FormField label={'password'} name={'password'} id={'password'} type={'password'} {...register('password')} />
      <Button>Log in</Button>
    </form>
  );
};

const Root = () => {
  const { user } = useAuth();
  const { errorMessage } = useError();
  return (
    <>
      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
};

export default Root;
