import React from 'react';
import { Item } from '@/redux/ducks/cart';

import Layout from '@/components/Layout';
import Shelf from '@/components/Shelf';

const ITEMS: Item[] = [
  {
    id: 0,
    image: 'item.jpg',
    title: 'Sabão Em Pó Multiação Poder Acelerador 2Kg Omo',
    oldPrice: 3499,
    price: 3199,
    reference: 'un',
  },
  {
    id: 1,
    image: 'item2.jpeg',
    title: 'Achocolatado Em Pó Nescau 400g',
    oldPrice: 1012,
    price: 945,
    reference: 'un',
  },
  {
    id: 3,
    image: 'arroz1.webp',
    title: 'Arroz Agulhinha Tipo 1 CAMIL Pacote 5kg',
    oldPrice: 1529,
    price: 1479,
    reference: 'un',
  },
  {
    id: 4,
    image: 'arroz2.webp',
    title: 'Arroz Agulhinha Tipo 1 Prato Fino Pacote 5kg',
    oldPrice: 1869,
    price: 1813,
    reference: 'un',
  },
  {
    id: 5,
    image: 'feijao1.webp',
    title: 'Feijão Carioca Tipo 1 Camil Pacote 1kg',
    oldPrice: 849,
    price: 813,
    reference: 'un',
  },
  {
    id: 6,
    image: 'feijao2.webp',
    title: 'Feijão Carioca Tipo 1 Kicaldo Pacote 1kg',
    oldPrice: 799,
    price: 749,
    reference: 'un',
  },
  {
    id: 7,
    image: 'macarrao1.webp',
    title: 'Macarrão De Sêmola Espaguete Galo 500g',
    oldPrice: 180,
    price: 168,
    reference: 'un',
  },
  {
    id: 8,
    image: 'macarrao2.webp',
    title: 'Macarrão Com Ovos Espaguete Fidelinho No 10 Adria 500g',
    oldPrice: 269,
    price: 230,
    reference: 'un',
  },
  {
    id: 9,
    image: 'macarrao3.webp',
    title: 'Macarrão De Sêmola Com Ovos Ninho 2 Renata Pacote 500g',
    oldPrice: 379,
    price: 314,
    reference: 'un',
  },
];

const Index: React.FC = () => (
  <Layout title="Promoções">
    <Shelf items={ITEMS} />
  </Layout>
);

export default Index;
