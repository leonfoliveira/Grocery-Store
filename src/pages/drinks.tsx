import React from 'react';
import { Item } from '@/redux/ducks/cart';

import Layout from '@/components/Layout';
import Shelf from '@/components/Shelf';

const ITEMS: Item[] = [
  {
    id: 2,
    image: 'coke.webp',
    title: 'Refrigerante Lata 350ml Coca Cola',
    price: 399,
    reference: 'un',
  },
];

const Drinks: React.FC = () => (
  <Layout title="Drinks">
    <Shelf items={ITEMS} />
  </Layout>
);

export default Drinks;
