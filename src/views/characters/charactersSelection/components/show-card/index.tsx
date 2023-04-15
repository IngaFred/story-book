import React from 'react';
import styles from './index.module.scss';
import { Grid, Image } from 'antd-mobile';
import A from '../../../../../assets/images/characters/布脱脱.jpg';

import B from '../../../../../assets/images/characters/廖不到.jpg';

import C from '../../../../../assets/images/characters/扈扈.jpg';

import D from '../../../../../assets/images/characters/胡软.jpg';
import { useNavigate } from 'react-router-dom';

export interface Characters {
	name: string,
	url: string,
	introduction: string,
}

const charactersList: Characters[] = [
	{
		name: '布脱脱',
		url: A,
		introduction: '阳光开朗大男孩！'
	},
	{
		name: '廖不到',
		url: B,
		introduction: '古灵多识怪爷爷！'
	},
	{
		name: '扈扈',
		url: C,
		introduction: '可爱明朗小妹妹！'
	},
	{
		name: '胡软',
		url: D,
		introduction: '孤高帅气冷傲娇！'
	},
]
/**
 * 角色选择
 */
function ShowCard() {
	const navigate = useNavigate();
	const handleFooter = (selectCharacter: Characters) => {
		navigate('/charactersDetails', {state: {character: selectCharacter}});
	}
	return (
		<div className={styles.all}>
			<Grid columns={2} gap={8}>
			{charactersList.map((item, index) => {
				return (
					<div key={index}>
						<div onClick={() => handleFooter(item)} className={styles.one}>
							<Image src={item.url} fit='fill' />
							<span className={styles.span}>{item.name}</span>
							{/* <div className={styles.infos}>{item.introduction}</div> */}
						</div>
					</div>
				)
			})}
			</Grid>
		</div>
	);
}
export default ShowCard;
