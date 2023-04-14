import React from 'react'
import styles from './index.module.scss';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import ItemDetail from './components/item-detail';

export default function index() {
  return (
    <div className={styles.home}>
      <Header title="银子那些事儿 物品栏" />
      <ItemDetail />
      <Footer />
    </div>
  )
}