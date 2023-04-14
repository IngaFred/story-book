import React from 'react';
import styles from './index.module.scss';
import { useLocation } from 'react-router-dom';
import type { characters } from '../../../charactersSelection/components/show-card';
import { Grid, Image } from 'antd-mobile';

export default function Detail() {
	const location = useLocation();
	const character: characters = location?.state?.character || null;
	return (
		<div className={styles.all}>
			<Image src={character.url} fit="fill" />
			<div className={styles.infos}>{character.introduction}</div>
		</div>
	);
}
