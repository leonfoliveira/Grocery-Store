import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavbarItem from './index';

it('should render navbar item', () => {
  const { container } = render(<NavbarItem text="TESTE" href="" />);
  expect(container.querySelector('p')).toHaveTextContent('TESTE');
});
