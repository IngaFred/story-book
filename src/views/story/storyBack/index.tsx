import React from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import styles from './index.module.scss';
import Detail from './storyBack-detail';

export default function index() {
	return (
		<div className={styles.home}>
		<Header title="故事背景"/>
		<Detail />
		{/* <Footer /> */}
	  </div>
	);
};
