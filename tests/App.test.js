import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../src/App';

test('Teste', () => {
  render(<App />);
  expect(screen.getByText('A+ Distribuidora')).toBeInTheDocument();
});
