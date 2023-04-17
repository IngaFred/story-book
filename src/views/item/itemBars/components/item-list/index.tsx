import React from 'react';
import styles from './index.module.scss';
import { Grid, Image } from 'antd-mobile';
import A from '@/assets/images/items/1-.jpg';
import B from '@/assets/images/items/2-.jpg';
import C from '@/assets/images/items/3-.jpg';
import D from '@/assets/images/items/4-.jpg';
import E from '@/assets/images/items/5-.jpg';
import F from '@/assets/images/items/6-.jpg';
import G from '@/assets/images/items/7-.jpg';
import H from '@/assets/images/items/8-.jpg';
import I from '@/assets/images/items/9-.jpg';

import AD from '@/assets/images/itemDetails/1.jpg';
import BD from '@/assets/images/itemDetails/2.jpg';
import CD from '@/assets/images/itemDetails/3.jpg';
import DD from '@/assets/images/itemDetails/4.jpg';
import ED from '@/assets/images/itemDetails/5.jpg';
import FD from '@/assets/images/itemDetails/6.jpg';
import GD from '@/assets/images/itemDetails/7.jpg';
import HD from '@/assets/images/itemDetails/8.jpg';
import ID from '@/assets/images/itemDetails/9.jpg';
import { useNavigate } from 'react-router-dom';

export interface ItemProps {
	name: string;
	url: string;
	urlDetail: string;
	introduction: string;
}
const itemList: ItemProps[] = [
	{
		name: '线索一',
		url: A,
		urlDetail: AD,
		introduction: '请根据线索所给信息，推断剧情演变。',
	},
	{
		name: '线索二',
		url: B,
		urlDetail: BD,
		introduction: '请根据线索所给信息，推断剧情演变。',
	},
	{
		name: '线索三',
		url: C,
		urlDetail: CD,
		introduction: '请根据线索所给信息，推断剧情演变。',
	},
	{
		name: '线索四',
		url: D,
		urlDetail: DD,
		introduction: '请根据线索所给信息，推断剧情演变。',
	},
	{
		name: '线索五',
		url: E,
		urlDetail: ED,
		introduction: '请根据线索所给信息，推断剧情演变。',
	},
	{
		name: '线索六',
		url: F,
		urlDetail: FD,
		introduction: '请根据线索所给信息，推断剧情演变。',
	},
	{
		name: '线索七',
		url: G,
		urlDetail: GD,
		introduction: '请根据线索所给信息，推断剧情演变。',
	},
	{
		name: '线索八',
		url: H,
		urlDetail: HD,
		introduction: '请根据线索所给信息，推断剧情演变。',
	},
	{
		name: '线索九',
		url: I,
		urlDetail: ID,
		introduction: '请根据线索所给信息，推断剧情演变。',
	},
];
export default function ItemShow() {
	const navigate = useNavigate();
	const handleFooter = (selectItem: ItemProps) => {
		navigate('/itemDetails', { state: { character: selectItem } });
	};
	return (
		<div className={styles.all}>
			<Grid columns={3} gap={8}>
				{itemList.map((item, index) => {
					return (
						<>
							<div key={index}>
								<div onClick={() => handleFooter(item)} className={styles.one}>
									<Image src={item.url} fit="fill" className={styles.image} height={170}/>
									<span className={styles.span}>{item.name}</span>
								</div>
							</div>
						</>
					);
				})}
			</Grid>
		</div>
	);
}
