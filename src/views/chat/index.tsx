import React from 'react'
import styles from './index.module.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';

export default function index() {
  return (
    <div className={styles.home}>
      <Header title="银子那些事儿 聊天" />
      chat
      <Footer />
    </div>
  )
}