import React from 'react';
import ListItem from '@/components/list-item';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import { LeftOutline, MoreOutline } from 'antd-mobile-icons';

export interface HeaderProps {
	title?: string;
}

/**
 * 头部组件
 * @returns
 */
function Header({ title }: HeaderProps) {
	const navigate = useNavigate();
	const location = useLocation();
	return (
		<div className={styles.empty_block}>
			<ListItem
				left={
					<span
						onClick={() => {
							navigate(-1);
						}}
					>
						{<LeftOutline />}
					</span>
				}
				right={
					location.pathname !== '/chapters' &&
					<span
						onClick={() => {
							navigate('/chapters');
						}}
					>
						{<MoreOutline />}
					</span>
				}
				className={styles.header}
			>
				<div className={styles.title}>{title}</div>
			</ListItem>
		</div>
	);
}

export default Header;
