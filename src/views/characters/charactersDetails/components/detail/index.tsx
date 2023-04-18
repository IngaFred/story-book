import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Image } from 'antd-mobile';
import { Characters } from '@/views/characters/charactersSelection/components/show-card';

export default function Detail() {
	const location = useLocation();
	const character: Characters = location?.state?.character ?? null;
	const [selected, setSelected] = useState<Boolean>(false);
	const [choseCharacter, setChoseCharacter] = useState<Characters | undefined>(
		undefined
	);
	const navigate = useNavigate();
	const chose = (choseCharacter: Characters) => {
		setSelected(!selected);
		setChoseCharacter(choseCharacter);
	};
	useEffect(() => {
		// console.log('==selected :>> ', selected);
		typeof choseCharacter === 'object' && navigate('/charactersSelection', {
			state: { chose: choseCharacter, isSelected: selected },
		});
	}, [selected, choseCharacter]);

	return (
		<div className={styles.all}>
			<Image src={character?.url} fit="fill" />
			<div className={styles.infos}>{character?.introduction}</div>
			<Button
				block
				color="success"
				size="large"
				onClick={() => chose(character)}
			>
				选中
			</Button>
		</div>
	);
}
