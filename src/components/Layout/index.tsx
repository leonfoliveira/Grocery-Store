import React from 'react';
import Head from 'next/head';

import Header from '@/components/Header';

import styles from './Layout.module.scss';

interface LayoutProps {
  title: string;
}
const Layout: React.FC<LayoutProps> = ({ children, title }) => (
  <div className={styles.container}>
    <Head>
      <title>{title} - Redux Supermarket</title>
    </Head>
    <Header />
    <main>{children}</main>
  </div>
);

export default Layout;
