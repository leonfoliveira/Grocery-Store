import React from 'react';
import Link from 'next/link';

import styles from './NavbarItem.module.scss';

interface NavbarItemProps {
  text: string;
  href: string;
  highlight?: boolean;
}
const NavbarItem: React.FC<NavbarItemProps> = ({ text, href, highlight }) => (
  <Link href={href}>
    <div className={`${styles.container} ${highlight && styles.highlight}`}>
      <p>{text}</p>
    </div>
  </Link>
);

NavbarItem.defaultProps = {
  highlight: false,
};

export default NavbarItem;
