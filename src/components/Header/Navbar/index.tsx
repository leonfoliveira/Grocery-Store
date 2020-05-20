import React from 'react';

import NavbarItem from './NavbarItem';

import styles from './Navbar.module.scss';

const Navbar: React.FC = () => (
  <nav className={styles.container}>
    <NavbarItem href="/" text="Sales" highlight />
    <NavbarItem href="/drinks" text="Drinks" />
    <NavbarItem href="/" text="Fruits and Vegetables" />
    <NavbarItem href="/" text="Hygiene and Cleaning" />
    <NavbarItem href="/" text="Pet" />
  </nav>
);

export default Navbar;
