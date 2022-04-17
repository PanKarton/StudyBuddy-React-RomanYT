import { render } from '@testing-library/react';
import UsersProvider from 'providers/UsersProvider';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

export const renderWithProviders = (children) => {
  return render(
    <ThemeProvider theme={theme}>
      <UsersProvider>{children}</UsersProvider>
    </ThemeProvider>,
  );
};
