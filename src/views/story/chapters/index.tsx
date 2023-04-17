import React from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';

import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <Header title="银子那些事儿 第一章" />

      <Footer />
    </div>
  );
}
