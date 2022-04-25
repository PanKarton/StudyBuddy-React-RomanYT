import React from 'react';
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

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        </Helmet>
        <ActualGroupProvider>
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
        </ActualGroupProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
