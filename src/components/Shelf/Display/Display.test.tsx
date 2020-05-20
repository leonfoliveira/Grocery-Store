import React from 'react';
import { render } from '@testing-library/react';
import { wrapper } from '@/redux/store';
import '@testing-library/jest-dom/extend-expect';
import Display from './index';

const DisplayWithRedux = wrapper.withRedux(Display);

const ITEM = {
  image: 'TEST_IMG',
  title: 'TEST_ITEM',
  price: 9911,
};

it('should render display', () => {
  const { container } = render(
    <DisplayWithRedux initialProps={ITEM} initialState={null} />
  );
  expect(container).toHaveTextContent('$ 99');
});
