import { render, fireEvent, screen, waitFor } from 'test-utils';
import SearchBar from './SearchBar';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';
import 'jest-environment-jsdom';

const server = setupServer(...handlers);

describe('Searchbar with downshift', () => {
  // beforeAll(() => server.listen());
  // afterEach(() => server.resetHandlers());
  // afterAll(() => server.close());
  it('Properly renders searchbar', () => {
    render(<SearchBar />);
    screen.getByText('Logged as:');
    screen.getByPlaceholderText('Find student...');
  });
  // it('Properly displays matching users', async () => {
  //   render(<SearchBar />);
  //   const input = screen.getByPlaceholderText('Find student...');
  //   fireEvent.change(input, { ta1rget: { value: 'mi' } });
  //   // await waitFor(() => {
  //   //   screen.getByText('Miriamcia');
  //   // });
  // });
  // it('Hides downshift after ESC press', async () => {
  //   render(<SearchBar />);
  //   const input = screen.getByPlaceholderText('Find student...');
  //   fireEvent.change(input, { target: { value: 'mi' } });
  //   // await screen.findByText(/Miriamcia/);
  //   fireEvent.keyDown(input, { key: 'Escape', code: 'Escape' });
  //   const downshift = screen.queryByText(/Miriamcia/);
  //   expect(downshift).toBeNull();
  // });
  // // it('Hides downshift after clearing input', async () => {
  // //   render(<SearchBar />);
  // //   const input = screen.getByPlaceholderText('Find student...');
  // //   fireEvent.change(input, { target: { value: 'mi' } });
  // //   await screen.findByText(/Miriamcia/);
  // //   fireEvent.change(input, { target: { value: '' } });
  // //   await waitFor(() => {
  // //     const downshift = screen.queryByText(/Miriamcia/);
  // //     expect(downshift).toBeNull();
  // //   });
  // // });
});
