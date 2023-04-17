import React from 'react';
import styles from './index.module.scss';
import { useLocation } from 'react-router-dom';
import { Image, Card, Grid, Divider } from 'antd-mobile';
import type { ItemProps } from '../../../itemBars/components/item-list';

export default function ItemDetail() {
	const location = useLocation();
	const character: ItemProps = location?.state?.character || null;
	return (
		<div className={styles.all}>
			<Grid columns={2} gap={16} className={styles.item}>
				<div>
					<Image src={character?.url} fit="fill" />
				</div>
				<div className={styles.infos}>{character?.introduction}</div>
			</Grid>
			<Divider
				contentPosition="left"
				style={{
					color: 'black',
					borderColor: 'black',
					borderStyle: 'dashed',
				}}
			>
				详情描述
			</Divider>
			<Grid columns={1} className={styles.itemDetail}>
				<div>
					<Image src={character?.urlDetail} fit="fill" />
				</div>
			</Grid>
		</div>
	);
}
