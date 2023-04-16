import React from 'react';
import styles from './index.module.scss';
import { useLocation } from 'react-router-dom';
import { Image } from 'antd-mobile';
import { Characters } from '@/views/characters/charactersSelection/components/show-card';

export default function Detail() {
  const location = useLocation();
  const character: Characters = location?.state?.character || null;
  return (
    <div className={styles.all}>
      <Image src={character?.url} fit="fill" />
      <div className={styles.infos}>{character?.introduction}</div>
    </div>
  );
}
