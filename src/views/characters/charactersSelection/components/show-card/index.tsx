import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Button, Grid, Image } from 'antd-mobile';
import A from '@/assets/images/characters/布脱脱.jpg';

import B from '@/assets/images/characters/廖不到.jpg';

import C from '@/assets/images/characters/扈扈.jpg';

import D from '@/assets/images/characters/胡软.jpg';
import { useLocation, useNavigate } from 'react-router-dom';

export interface Characters {
	name: string;
	url: string;
	introduction: string;
}

const charactersList: Characters[] = [
	{
		name: '布脱脱',
		url: A,
		introduction: '阳光开朗大男孩！',
	},
	{
		name: '廖不到',
		url: B,
		introduction: '古灵多识怪爷爷！',
	},
	{
		name: '扈扈',
		url: C,
		introduction: '可爱明朗小妹妹！',
	},
	{
		name: '胡软',
		url: D,
		introduction: '孤高帅气冷傲娇！',
	},
];
/**
 * 角色选择
 */
function ShowCard() {
	const navigate = useNavigate();
  const [selected, setSelected] = useState<Boolean>(false)
  const [choseCharacter, setChoseCharacter] = useState<Characters | undefined>(undefined)
	const location = useLocation();
	const { chose, isSelected } = location?.state || {};
  useEffect(() => {
    typeof isSelected === 'boolean' && setSelected(isSelected)
    typeof chose === 'object' && setChoseCharacter(chose)
  }, [chose, isSelected])
  
	// console.log('isSelected ==>', isSelected);
  // console.log('selected ==>', selected)
	// console.log('chose', chose);
  const handleFooter = (selectCharacter: Characters) => {
		navigate('/charactersDetails', { state: { character: selectCharacter } });
	};
  const setStore = () => {
    navigate('/chapters')
  }
	return (
		<div className={styles.all}>
			<Grid columns={2} gap={8}>
				{charactersList.map((item, index) => {
					return (
						<div key={index}>
							<div onClick={() => handleFooter(item)} className={styles.one}>
								<Image src={item.url} fit="fill" />
								<span className={styles.span}>{item.name}</span>
								{/* <div className={styles.infos}>{item.introduction}</div> */}
							</div>
						</div>
					);
				})}
			</Grid>
			{isSelected ? (
				<Button block color="primary" size="large" onClick={setStore}>
          确认选择{choseCharacter?.name}
				</Button>
			) : (
				<Button block color="warning" size="large">
					点击角色选择
				</Button>
			)}
		</div>
	);
}
export default ShowCard;
