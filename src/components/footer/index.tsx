import React from 'react';
import ListItem from '../list-item';
import styles from './index.module.scss';
import { MailFill, MessageFill, SmileFill, StarFill } from 'antd-mobile-icons';
import { useNavigate } from 'react-router-dom';

export interface FooterProps {}

/**
 * 头部组件
 * @returns
 */
function Header(props: FooterProps) {
	interface Footer {
		name: string;
		icon: any;
		path: string;
	}
	const footers: Footer[] = [
		{
			name: '聊天',
			icon: <MessageFill fontSize={24} />,
			path: '/chat',
		},
		{
			name: '物品',
			icon: <MailFill fontSize={24} />,
			path: '/itemBars',
		},
		{
			name: '地图',
			icon: <StarFill fontSize={24} />,
			path: '/home',
		},
		{
			name: '角色',
			icon: <SmileFill fontSize={24} />,
			path: '/charactersSelection',
		},
	];
	const navigate = useNavigate();
	const handleFooter = (path: string) => {
		navigate(path);
	};
	return (
		<div className={styles.empty_block}>
			<div className={styles.footer}>
				{footers.map((item, index) => {
					return (
						<div key={index}>
							<div onClick={() => handleFooter(item.path)}>
								<div className={styles.img}>{item.icon}</div>
								<span>{item.name}</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Header;
