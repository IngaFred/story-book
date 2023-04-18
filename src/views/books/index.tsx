import React from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Show from './book-show';
import styles from './index.module.scss';

export default function index() {
  return (
    <div className={styles.home}>
      <Header title="故事选择"/>
      <Show />
      <Footer />
    </div>
  );
}
