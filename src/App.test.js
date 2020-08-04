import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const res = render(<App />);
  expect(res.container.firstChild).toHaveClass("App");
});
