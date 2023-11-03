import React from 'react'
import Header from '@/components/header';
import Content from './components/content';
import styles from './index.module.scss';

export default function index() {
  return (
    <div className={styles.home}>
			<Header title="" />
      <Content />
		</div>
  )
}
