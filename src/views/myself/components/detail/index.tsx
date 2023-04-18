import React from 'react';
import styles from './index.module.scss';
import { useLocation } from 'react-router-dom';
import { ErrorBlock, Image } from 'antd-mobile';
import { Characters } from '@/views/characters/charactersSelection/components/show-card';
import { useChoseStore } from '@/store';

export default function Detail() {
	// const location = useLocation();
	// const character: Characters = location?.state?.character ?? null;
	const character: Characters | undefined =
		useChoseStore((state) => state.chapter) ?? undefined;
	return (
		<div className={styles.all}>
			{typeof character === 'object' ? (
				<>
					<Image src={character?.url} fit="fill" />
					<div className={styles.infos}>{character?.name}</div>
					<div className={styles.infos}>{character?.introduction}</div>
				</>
			) : (
				<ErrorBlock description="请正确选择角色！" />
			)}
		</div>
	);
}
