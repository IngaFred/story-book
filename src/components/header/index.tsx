import React from 'react';
import ListItem from '@/components/list-item';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

export interface HeaderProps {
  title?: string;
}

/**
 * 头部组件
 * @returns
 */
function Header({ title }: HeaderProps) {
  const navigate = useNavigate();
  return (
    <div className={styles.empty_block}>
      <ListItem
        left={
          <span
            onClick={() => {
              navigate(-1);
            }}
          >
            {'<'}
          </span>
        }
        right={'...'}
        className={styles.header}
      >
        <div className={styles.title}>{title}</div>
      </ListItem>
    </div>
  );
}

export default Header;
