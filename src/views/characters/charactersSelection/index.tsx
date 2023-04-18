import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ShowCard from './components/show-card';
import styles from './index.module.scss';

export default function index() {
  return (
    <div className={styles.home}>
      <Header title="角色选择" />
      <ShowCard />
      {/* <Footer /> */}
    </div>
  );
}
