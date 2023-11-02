import React from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';

export interface ListItemProps {
  [key: string]: any;
  top?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
  bottom?: React.ReactNode;
}
/**
 * 上中下，左中右布局
 */


function ListItem({

  top,
  left,
  right,
  bottom,
  children,
  ...props
}: ListItemProps) {
  return (
    <div {...props} className={classnames(styles.list_item, props?.className)}>
      <div className={styles.left}>{left}</div>
      <div className={styles.center}>
        <div className={styles.top}>{top}</div>
        <div className={styles.content}>{children}</div>
        <div className={styles.bottom}>{bottom}</div>
      </div>
      <div className={styles.right}>{right}</div>
    </div>
  );
}

export default ListItem;
