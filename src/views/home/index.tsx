import React from 'react';
import Header from '../../components/header';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <Header title="银子那些事儿-第一章" />
      <div className={styles.body}>index222</div>
    </div>
  );
}
