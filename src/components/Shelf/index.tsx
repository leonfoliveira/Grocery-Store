import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { integerToMoney } from '@/helpers/money';
import { State } from '@/redux/store';
import { Item, StateType as CartStateType } from '@/redux/ducks/cart';

import Display from './Display';

import styles from './Products.module.scss';

interface ShelfProps {
  items: Item[];
}
const Shelf: React.FC<ShelfProps> = ({ items }) => {
  const { total } = useSelector<State, CartStateType>((state) => state.cart);

  return (
    <div className={styles.container}>
      {items && items.map((item) => <Display key={item.id} {...item} />)}
      {/* {items && items.map((item) => <Display key={item.id} {...item} />)}
      {items && items.map((item) => <Display key={item.id} {...item} />)}
      {items && items.map((item) => <Display key={item.id} {...item} />)}
      {items && items.map((item) => <Display key={item.id} {...item} />)}
      {items && items.map((item) => <Display key={item.id} {...item} />)}
      {items && items.map((item) => <Display key={item.id} {...item} />)}
      {items && items.map((item) => <Display key={item.id} {...item} />)} */}

      <Link href="/cart">
        <div className={styles.cart}>
          <div>
            <p className={styles.label}>Total</p>
            <p className={styles.value}>{integerToMoney(total)}</p>
          </div>
          <FaShoppingCart />
        </div>
      </Link>
    </div>
  );
};
export default Shelf;
