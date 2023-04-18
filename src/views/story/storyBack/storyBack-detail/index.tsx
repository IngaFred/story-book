import React from 'react';
import styles from './index.module.scss';
import { useLocation } from 'react-router-dom';
import { Image } from 'antd-mobile';

export default function Detail() {
  const location = useLocation();
  const back:any = location?.state?.back || null;
  return (
    <div className={styles.all}>
      <Image src={back} fit="fill" height={'30rem'}/>
    </div>
  );
}
