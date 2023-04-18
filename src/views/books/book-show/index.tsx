import React from 'react';
import coverImage from '@/assets/images/books/银子封面图.jpg';
import coverImageBackGround from '@/assets/images/books/银子背景介绍.jpg';
import dance from '@/assets/images/books/玄.gif';
import danceBackGround from '@/assets/images/books/玄.gif';

import { Divider, Grid, Image } from 'antd-mobile';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';

interface Book {
	id: string;
	title: string;
	info: string;
	cover: any;
	path: string;
	background: any;
}
const books: Book[] = [
	{
		id: '0',
		title: '《银子那些事儿》',
		cover: coverImage,
		info: '点击查看故事背景',
		path: '/chapters',
		background: coverImageBackGround,
	},
	{
		id: '1',
		title: '《Dance》',
		cover: dance,
		info: '点击查看故事背景',
		path: '',
		background: danceBackGround,
	},
];

export default function Show() {
	const navigate = useNavigate();
	const go = (path: string) => {
		navigate(path);
	};
	const handleGo = (background: any) => {
		navigate('/storyBack', { state: { back: background } });
	};
	return (
		<div className={styles.all}>
			<Grid columns={1}>
				{books.map((item) => {
					return (
						<div key={item.id}>
							<div className={styles.book}>
								<Grid columns={2} gap={'2rem'}>
									<Image
										src={item.cover}
										fit="cover"
										width={'9rem'}
										height={'13rem'}
										onClick={() => go(item.path)}
									/>
									<div>
										<span
											className={styles.span1}
											onClick={() => go(item.path)}
										>
											{item.title}
										</span>
										<span
											className={styles.span2}
											onClick={() => handleGo(item.background)}
										>
											{item.info}
										</span>
									</div>
								</Grid>
							</div>
							<Divider
								style={{
									color: 'black',
								}}
								key={`${item.id}-divider`}
							/>
						</div>
					);
				})}
			</Grid>
		</div>
	);
}
