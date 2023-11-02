import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import styles from './index.module.scss';

export default function index() {
	return (
		<div className={styles.home}>
			<Header title="故事创建" />
			<Footer />
		</div>
	);
}
