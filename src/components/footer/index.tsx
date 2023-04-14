import React from 'react';
import ListItem from '../list-item';
import styles from './index.module.scss';

export interface FooterProps {}

/**
 * 头部组件
 * @returns
 */
function Header(props: FooterProps) {
  return (
    <div className={styles.empty_block}>
      <div className={styles.footer}>
        {['聊天', '物品', '地图', '我'].map((item, index) => {
          return (
            <div key={index}>
              <img className={styles.img} src="/logo192.png" alt="icon" />
              <div>{item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
