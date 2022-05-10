// import { render, fireEvent, screen, waitFor } from 'test-utils';
// import Root from './Root';
// import { setupServer } from 'msw/node';
// import { handlers } from 'mocks/handlers';
// import 'jest-environment-jsdom';
// import { findByLabelText } from '@testing-library/dom';

// const server = setupServer(...handlers);

// describe('Root component with authorization', () => {
//   beforeAll(() => server.listen());
//   afterEach(() => server.resetHandlers());
//   afterAll(() => server.close());

//   it('Properly renders logIn screen', () => {
//     render(<Root />);
//     screen.getAllByLabelText('login');
//     screen.getAllByLabelText('password');
//   });

//   // it(`Doesn't authorize when user doesnt exist`, async () => {
//     render(<Root />);
//     const loginInput = screen.getByLabelText('login');
//     const passwordinput = screen.getByLabelText('password');

//     fireEvent.change(loginInput, { target: { value: 'jp2gmd@wp.pl' } });
//     fireEvent.change(passwordinput, { target: { value: 'asdad' } });

//     const signInButton = screen.getByText('Log in');
//     console.log(signInButton);
//     await fireEvent.click(signInButton);
//     expect(screen.getByLabelText('login')).not.toBeNull();
//     // screen.getAllByLabelText('login');
//   });
// });
