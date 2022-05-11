import { render, fireEvent, screen, waitFor } from 'test-utils';
import SearchBar from './SearchBar';
import 'jest-environment-jsdom';

describe('Searchbar with downshift', () => {
  it('Properly renders searchbar', () => {
    render(<SearchBar />);
    screen.getByText('Logged as:');
    screen.getByPlaceholderText('Find student...');
  });

  it('Properly displays matching users', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Find student...');
    fireEvent.change(input, { target: { value: 'mi' } });
    await screen.findByText(/Miriamcia/);
  });

  it('Hides downshift after ESC press', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Find student...');
    fireEvent.change(input, { target: { value: 'mi' } });
    await screen.findByText(/Miriamcia/);
    fireEvent.keyDown(input, { key: 'Escape', code: 'Escape' });
    await waitFor(() => {
      const downshift = screen.queryByText(/Miriamcia/);
      expect(downshift).toBeNull();
    });
  });

  it('Hides downshift after clearing input', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Find student...');
    fireEvent.change(input, { target: { value: 'mi' } });
    await screen.findByText(/Miriamcia/);
    fireEvent.change(input, { target: { value: '' } });
    await waitFor(() => {
      const downshift = screen.queryByText(/Miriamcia/);
      expect(downshift).toBeNull();
    });
  });
});
