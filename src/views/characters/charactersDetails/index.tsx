import React from 'react'
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Detail from './components/detail';
import styles from './index.module.scss';
import { useLocation } from 'react-router-dom';
import type { characters } from '../charactersSelection/components/show-card';

export default function index() {
  return (
    <div className={styles.home}>
      <Header title='角色详情' />
      <Detail />
      <Footer />
    </div>
  )
}