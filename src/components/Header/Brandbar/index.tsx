import React from 'react';

import styles from './Brandbar.module.scss';

const Brandbar: React.FC = () => (
  <header className={styles.container}>
    <img className={styles.image} src="/assets/logo.svg" alt="Logo" />
  </header>
);

export default Brandbar;
