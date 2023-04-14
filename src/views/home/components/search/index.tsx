import React from 'react';
import { Input } from 'antd-mobile';
import styles from './index.module.scss';
import { SearchOutline } from 'antd-mobile-icons';

function Search() {
  return (
    <div className={styles.search}>
      <SearchOutline className={styles.icon} />
      <Input className={styles.input} placeholder={'请输入内容'} clearable />
    </div>
  );
}

export default Search;
