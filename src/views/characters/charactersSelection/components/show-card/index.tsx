import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Button, Grid, Image } from 'antd-mobile';
import { useLocation, useNavigate } from 'react-router-dom';
import { charactersList } from '@/data/chapter-chose';
import { useChoseStore } from '@/store';
export interface Characters {
	name: string;
	url: string;
	introduction: string;
	id: string;
}
/**
 * 角色选择
 */
function ShowCard() {
	const navigate = useNavigate();
	const [selected, setSelected] = useState<Boolean>(false);
	const [choseCharacter, setChoseCharacter] = useState<Characters | undefined>(
		undefined
	);
	const location = useLocation();
	const { chose, isSelected } = location?.state || {};

	useEffect(() => {
		typeof isSelected === 'boolean' && setSelected(isSelected);
		typeof chose === 'object' && setChoseCharacter(chose);
	}, [chose, isSelected]);

	const handleFooter = (selectCharacter: Characters) => {
		navigate('/charactersDetails', { state: { character: selectCharacter } });
	};

	const setChoseChapter = useChoseStore((state) => state.setChoseChapter);
	const setStore = ( chapter: Characters) => {
		// 设置 chapterStore
		setChoseChapter(chapter);
		navigate('/chapters');
	};

	return (
		<div className={styles.all}>
			<Grid columns={2} gap={8}>
				{charactersList.length > 0 &&
					charactersList.map((item, index) => {
						return (
							<div key={index}>
								<div  onClick={() => handleFooter(item)} className={styles.one}>
									<Image src={item?.url} fit="fill" />
									<span className={styles.span}>{item?.name}</span>
									{/* <div className={styles.infos}>{item.introduction}</div> */}
								</div>
							</div>
						);
					})}
			</Grid>
			{isSelected ? (
				<Button
					block
					color="primary"
					size="large"
					onClick={() => setStore(choseCharacter as Characters)}
				>
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
