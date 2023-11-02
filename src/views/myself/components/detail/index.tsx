import React from 'react';
import styles from './index.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, ErrorBlock, Image } from 'antd-mobile';
import { Characters } from '@/views/characters/charactersSelection/components/show-card';
import { useChoseStore } from '@/store';
//默认角色
import defaultCharacter from '@/assets/images/characters/布脱脱.jpg';

export default function Detail() {
	// const location = useLocation();
	// const character: Characters = location?.state?.character ?? null;
	const character: Characters | undefined =
		useChoseStore((state) => state.chapter) ?? undefined;
	const navigate = useNavigate();
	const backChose = () => {
		navigate('/charactersSelection');
	};
	return (
		<div className={styles.all}>
			{typeof character === 'object' ? (
				<>
					<Image src={character?.url} fit="fill" />
					<div className={styles.infos}>{character?.name}</div>
					<div className={styles.infos}>{character?.introduction}</div>
				</>
			) : (
				<>
					<Image src={defaultCharacter} fit="fill" />
					<div className={styles.infos}>布脱脱</div>
					<div className={styles.infos}>阳光开朗大男孩</div>
				</>
				// <ErrorBlock description="请正确选择角色！" />
			)}
			{/* 修改了css中高度， 添加重新选择角色按钮*/}
			<div className={styles.btn}>
				<Button
					block
					color="primary"
					fill="none"
					size="middle"
					onClick={() => backChose()}
				>
					重选角色
				</Button>
			</div>
		</div>
	);
}
