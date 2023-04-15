import React from 'react';
import styles from './index.module.scss';
import { useLocation } from 'react-router-dom';
import { Image } from 'antd-mobile';
import type { ItemProps } from '../../../itemBars/components/item-list';

export default function ItemDetail() {
  const location = useLocation();
  const character: ItemProps = location?.state?.character || null;
  return (
    <div className={styles.all}>
      <Image src={character?.urlDetail} fit="fill" />
      <div className={styles.infos}>{character?.introduction}</div>
    </div>
  );
}
