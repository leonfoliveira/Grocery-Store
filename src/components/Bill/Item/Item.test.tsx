import React from 'react';
import { render } from '@testing-library/react';
import { wrapper } from '@/redux/store';
import '@testing-library/jest-dom/extend-expect';
import Item from './index';

const ItemWithRedux = wrapper.withRedux(Item);

const ITEM = {
  image: 'TEST_IMG',
  title: 'TEST_ITEM',
  price: 9999,
};

it('should render item', () => {
  const { container } = render(
    <ItemWithRedux initialProps={ITEM} initialState={null} />
  );
  expect(container.querySelector('h2')).toHaveTextContent('$ 99.99');
});
