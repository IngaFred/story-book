import React from 'react';
import { List, Tag } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

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
			id: '0',
			name: '故事重选',
			path: '/',
			children: [
				{
					id: '00',
					name: '银子那些事儿',
					path: '',
					children: [
						{
							id: '001',
							name: '- 第一章',
							path: '/home',
						},
						{
							id: '002',
							name: '- 第二章',
							path: '',
						},
					],
				},
			],
		},
	];

	return (
		<div className={styles.all}>
			<div style={{ margin: '20px' }}>
				{data.map((item) => (
					<Directory data={item} key={item.id} />
				))}
			</div>
		</div>
	);
}

function ListItem(props: { item: Item }) {
	const navigate = useNavigate();

	const go = (path: string) => {
		navigate(path);
	};

	const renderChildren = (children?: Item[]) => {
		if (children) {
			return children.map((child) => <Directory data={child} key={child.id} />);
		} else {
			return null;
		}
	};

	return (
		<List.Item key={props.item.id} className={styles.directory}>
			<div
				onClick={() => {
					go(props.item.path);
				}}
			>
				{props.item.name === '故事重选' ? (
					<div className={styles.special}>
						<span className={styles.span}>{props.item.name}</span>
					</div>
				) : props.item.id === '00' ? (
					<div className={styles['list-00']}>{props.item.name}</div>
				) : (
					<div className={styles['list-item']}>
						<span>{props.item.name}</span>
						{props.item.id === '001' ? (
							<Tag
								color="rgb(127, 166, 192)"
								fill="outline"
								style={{
									'--border-radius': '0.1rem',
									height: '1rem',
									margin: 'auto 0',
									lineHeight: '0.8rem',
								}}
							>
								推进中
							</Tag>
						) : (
							<Tag
								color="rgb(192, 127, 127)"
								fill="outline"
								style={{
									'--border-radius': '0.1rem',
									height: '1rem',
									margin: 'auto 0',
									lineHeight: '0.8rem',
								}}
							>
								未进行
							</Tag>
						)}
					</div>
				)}
			</div>
			{renderChildren(props.item.children)}
		</List.Item>
	);
}

function Directory(props: DirectoryProps) {
	return (
		<>
			<ListItem item={props.data} />
		</>
	);
}

export default Chose;
