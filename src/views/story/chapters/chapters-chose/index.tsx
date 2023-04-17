import React from 'react';
import { List } from 'antd-mobile';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';

interface Item {
	id: string;
	name: string;
	path: string;
	children?: Item[];
}

interface DirectoryProps {
	data: Item;
}

function Chose() {
	const data: Item[] = [
		{
			id: '1',
			name: '故事一',
			path: '/',
			children: [
				{
					id: '01',
					name: '银子那些事儿',
					path: '',
					children: [
						{
							id: '001',
							name: '第一章',
							path: '/home',
						},
						{
							id: '002',
							name: '第二章',
							path: '/home',
						},
					],
				},
			],
		},
	];

	return (
		<div className={styles.all}>
			{data.map((item, index) => {
				return <Directory data={item} key={index} />;
			})}
		</div>
	);
}

function Directory(props: DirectoryProps) {
	const navigate = useNavigate();
	const renderItem = (item: Item) => {
		return <div style={{ padding: '0.3rem' }}>{item.name}</div>;
	};
	const go = (path: string) => {
		navigate(path);
	};

	return (
		<List>
			{props.data.children?.map((item) => (
				<div
					style={{
						fontWeight: 'bold',
						backgroundColor: '#f5f5f5',
						padding: '0.5rem',
					}}
				>
					<List.Item key={item.id}>
						<div
							onClick={() => {
								go(item.path);
							}}
						>
							{renderItem(item)}
						</div>
						{item.children && <Directory data={item} />}
					</List.Item>
				</div>
			))}
		</List>
	);
}

export default Chose;
