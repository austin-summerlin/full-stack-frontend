import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<MemoryRouter><App /></MemoryRouter>);
    expect(asFragment()).toMatchSnapshot();
  });
});
