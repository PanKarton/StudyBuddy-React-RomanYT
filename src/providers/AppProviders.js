import React from 'react';
import ActualGroupProvier from './ActualGroupProvider';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { Helmet } from 'react-helmet';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from 'hooks/useAuth';

const AppProvider = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        </Helmet>
        <ActualGroupProvier>
          <AuthProvider>{children}</AuthProvider>
        </ActualGroupProvier>
      </ThemeProvider>
    </Router>
  );
};

export default AppProvider;