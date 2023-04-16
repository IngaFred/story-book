import React from 'react';
import styles from './index.module.scss';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ItemShow from './components/item-list';

export default function index() {
  return (
    <div className={styles.home}>
      <Header title="银子那些事儿 物品栏" />
      <ItemShow />
      <Footer />
    </div>
  );
}
