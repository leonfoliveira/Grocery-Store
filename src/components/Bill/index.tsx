import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '@/redux/store';
import { StateType as CartStateType, clear } from '@/redux/ducks/cart';
import { integerToMoney } from '@/helpers/money';

import Item from './Item';

import styles from './Bill.module.scss';

const Bill: React.FC = () => {
  const { total, items } = useSelector<State, CartStateType>(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clear());
  };

  return (
    <div className={styles.container}>
      {items.length === 0 ? <h1 className={styles.empty}>Empty</h1> : null}
      <ul className={styles.list}>
        {items.map((item) => (
          <Item key={item.cardIndex} {...item} />
        ))}
      </ul>
      <div className={styles.total}>
        <h1>Total</h1>
        <h2>{integerToMoney(total)}</h2>
      </div>
      <div className={styles.footer}>
        <button
          className={`${styles.button} ${styles.alert}`}
          type="button"
          onClick={handleClear}
        >
          Clear
        </button>
        <button className={styles.button} type="button">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Bill;
