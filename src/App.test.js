import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders cleanup  app message', () => {
  const { getByText } = render(<App />);
  const cleanupMessage = getByText(/Cleanedup BeeHive App/i);
  expect(cleanupMessage).toBeInTheDocument();
});
