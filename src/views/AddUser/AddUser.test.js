import React from 'react';
import AddUser from './AddUser';
import Dashboard from '../Dashboard';
import { renderWithProviders } from 'helpers/RenderWithProviders';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('AddUser component', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>,
    );

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Miriamcia' } });
    fireEvent.change(screen.getByLabelText('Attendance'), { target: { value: '100%' } });
    fireEvent.change(screen.getByLabelText('Average'), { target: { value: '6' } });
    fireEvent.click(screen.getByLabelText('Terms consent'));
    fireEvent.click(screen.getByText('Add'));

    screen.getByText('Miriamcia');
  });
  it('Displays error when consent is not clicked', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>,
    );
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Miriamcia' } });
    fireEvent.change(screen.getByLabelText('Attendance'), { target: { value: '100%' } });
    fireEvent.change(screen.getByLabelText('Average'), { target: { value: '6' } });
    fireEvent.click(screen.getByText('Add'));

    const newUser = screen.queryByText('Miriamcia');
    expect(newUser).not.toBeInTheDocument();
    screen.getByText('Cannot add student without terms consent');
  });
});
