import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './index';

it('should render navbar items', () => {
  const { container } = render(<Navbar />);
  expect(container.querySelector('nav')).toBeInTheDocument();
});
