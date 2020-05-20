import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@/redux/store';
import {
  Item as ItemProps,
  StateType as CartStateType,
  itemAdd,
} from '@/redux/ducks/cart';
import { integerToMoney } from '@/helpers/money';

import styles from './Display.module.scss';

const Display: React.FC<ItemProps> = ({
  id,
  image,
  title,
  oldPrice,
  price,
  reference,
}) => {
  const { items } = useSelector<State, CartStateType>((state) => state.cart);
  const [selected, setSelected] = useState(0);

  const dispath = useDispatch();

  useEffect(() => {
    const quantity = items.reduce(
      (curr, item) => curr + (item.id === id ? 1 : 0),
      0
    );

    setSelected(quantity);
  }, [id, items]);

  const handleClick = () => {
    dispath(
      itemAdd({
        id,
        image,
        title,
        price,
        reference,
      })
    );
  };

  return (
    <button className={styles.action} type="button" onClick={handleClick}>
      <div className={styles.container}>
        {selected > 0 && <div className={styles.quantity}>{selected}</div>}
        <img className={styles.image} src={`/assets/${image}`} alt={title} />
        <div className={styles.info}>
          <div className={styles.title}>
            <p>{title}</p>
          </div>
          <div className={styles.priceContainer}>
            {oldPrice ? (
              <div className={styles.oldPrice}>
                <p>{integerToMoney(oldPrice)}</p>
              </div>
            ) : null}
            <div className={styles.price}>
              <div className={styles.integer}>
                <p>$ {Math.floor(price / 100)}</p>
              </div>
              <div className={styles.decimal}>
                <p>.{price % 100}</p>
                <p>{reference}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Display;
