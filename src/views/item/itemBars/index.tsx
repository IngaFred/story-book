import React from 'react';
import styles from './index.module.scss';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ItemShow from './components/item-list';
import { Collapse, ErrorBlock } from 'antd-mobile';

export default function index() {
	return (
		<div className={styles.home}>
			<Header title="银子那些事儿 物品栏" />
			<Collapse defaultActiveKey={['1']}>
				<Collapse.Panel key="1" title="第一次收证物品">
					<ItemShow />
				</Collapse.Panel>
				<Collapse.Panel key="2" title="其他物品">
					<ErrorBlock status="empty" />
				</Collapse.Panel>
			</Collapse>
			<Footer />
		</div>
	);
}
