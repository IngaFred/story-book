import React from 'react';
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
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
}

export default Header;
