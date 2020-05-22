import React from 'react';

import NavbarItem from './NavbarItem';

import styles from './Navbar.module.scss';

const Navbar: React.FC = () => (
  <nav className={styles.container}>
    <NavbarItem href="/" text="Sales" highlight />
    <NavbarItem href="/section/drinks" text="Drinks" />
    <NavbarItem href="/section/fruits" text="Fruits and Vegetables" />
    <NavbarItem href="/section/hygiene" text="Hygiene and Cleaning" />
    <NavbarItem href="/section/pet" text="Pet" />
  </nav>
);

export default Navbar;
