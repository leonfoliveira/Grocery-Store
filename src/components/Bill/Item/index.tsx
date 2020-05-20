import React from 'react';
import { useDispatch } from 'react-redux';
import { FaTimes } from 'react-icons/fa';
import {
  Item as ItemProps,
  itemRemove,
  Item as ItemType,
} from '@/redux/ducks/cart';
import { integerToMoney } from '@/helpers/money';

import styles from './Item.module.scss';

const Item: React.FC<ItemProps> = ({ cardIndex, title, image, price }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(itemRemove({ cardIndex, title, image, price } as ItemType));
  };

  return (
    <li className={styles.container}>
      <div className={styles.image}>
        <img src={`/assets/${image}`} alt="Item" />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.price}>{integerToMoney(price)}</h2>
      <button type="button" className={styles.remove} onClick={handleRemove}>
        <FaTimes />
      </button>
    </li>
  );
};

export default Item;
