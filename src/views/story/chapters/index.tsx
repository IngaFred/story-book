import React from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Chose from './chapters-chose';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <Header title="章节选择" />
      <Chose />
      <Footer />
    </div>
  );
}
