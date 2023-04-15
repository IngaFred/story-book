import React from 'react';
import ListItem from '../list-item';
import styles from './index.module.scss';

export interface HeaderProps {
  title?: string;
}

/**
 * 头部组件
 * @returns
 */
function Header({ title }: HeaderProps) {
  return (
    <div className={styles.empty_block}>
      <ListItem left={'<'} right={'...'} className={styles.header}>
        <div className={styles.title}>{title}</div>
      </ListItem>
    </div>
  );
}

export default Header;
