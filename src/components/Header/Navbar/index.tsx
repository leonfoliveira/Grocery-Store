import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import NavbarItem from './NavbarItem';

import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(!opened);
  };

  return (
    <nav className={styles.container}>
      <button type="button" onClick={handleOpen}>
        <div className={styles.hamburguer}>
          <FaBars />
        </div>
      </button>
      <div className={`${styles.items}`}>
        <NavbarItem href="/" text="Sales" highlight />
        <div className={opened ? styles.opened : styles.closed}>
          <NavbarItem href="/section/drinks" text="Drinks" />
          <NavbarItem href="/section/fruits" text="Fruits and Vegetables" />
          <NavbarItem href="/section/hygiene" text="Hygiene and Cleaning" />
          <NavbarItem href="/section/pet" text="Pet" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
