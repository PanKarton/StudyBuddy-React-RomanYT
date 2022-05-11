import { render, fireEvent, screen, waitFor } from 'test-utils';
import Root from './Root';
import 'jest-environment-jsdom';

describe('Root component with authorization', () => {
  it('Properly renders logIn screen', () => {
    render(<Root />);
    screen.getAllByLabelText('login');
    screen.getAllByLabelText('password');
  });

  it(`Doesn't authorize when user doesnt exist`, async () => {
    render(<Root />);
    const loginInput = screen.getByLabelText('login');
    const passwordinput = screen.getByLabelText('password');

    fireEvent.change(loginInput, { target: { value: 'jp2gmd@wp.pl' } });
    fireEvent.change(passwordinput, { target: { value: 'asdad' } });

    const signInButton = screen.getByText('Log in');
    fireEvent.click(signInButton);

    await waitFor(() => {
      screen.getByText(/Ooops!/);
    });
  });

  it(`Authorizes and displays app when login and password are correct`, async () => {
    render(<Root />);
    const loginInput = screen.getByLabelText('login');
    const passwordinput = screen.getByLabelText('password');

    fireEvent.change(loginInput, { target: { value: 'janina@wp.pl' } });
    fireEvent.change(passwordinput, { target: { value: 'Test123' } });

    const signInButton = screen.getByText('Log in');
    fireEvent.click(signInButton);

    await waitFor(() => {
      screen.getByText(/Logged as:/);
    });
  });
});
