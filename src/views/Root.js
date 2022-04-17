import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { Helmet } from 'react-helmet';
import { theme } from 'assets/styles/theme';
import { StyledWrapper } from './Root.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import AddUser from './AddUser/AddUser';
import Dashboard from './Dashboard';
import UsersProvider from 'providers/UsersProvider';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        </Helmet>
        <UsersProvider>
          <MainTemplate>
            <StyledWrapper>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/addStudent" element={<AddUser />} />
              </Routes>
            </StyledWrapper>
          </MainTemplate>
        </UsersProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
