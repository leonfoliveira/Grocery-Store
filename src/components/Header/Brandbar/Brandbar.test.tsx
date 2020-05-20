import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Brandbar from './index';

it('should render Brandbar logo', () => {
  const { container } = render(<Brandbar />);
  expect(container.querySelector('img')).toBeInTheDocument();
});
