import React from 'react';
import { List } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';

interface Item {
  id: string;
  name: string;
  path: string;
  children?: Item[];
}

interface DirectoryProps {
  data: Item;
}

function Chose() {
  const data: Item[] = [
    {
      id: '1',
      name: '故事',
      path: '/',
      children: [
        {
          id: '01',
          name: '银子那些事儿',
          path: '',
          children: [
            {
              id: '001',
              name: '第一章',
              path: '/home',
            },
            {
              id: '002',
              name: '第二章',
              path: '/home',
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className={styles.all}>
      {data.map((item) => (
        <Directory data={item} key={item.id} />
      ))}
    </div>
  );
}

function ListItem(props: { item: Item }) {
  const navigate = useNavigate();

  const go = (path: string) => {
    navigate(path);
  };

  const renderChildren = (children?: Item[]) => {
    if (children) {
      return children.map((child) => (
        <Directory data={child} key={child.id} />
      ));
    } else {
      return null;
    }
  };

  return (
    <List.Item key={props.item.id}>
      <div
        onClick={() => {
          go(props.item.path);
        }}
        className={styles.listItem}
      >
        {props.item.name}
      </div>
      {renderChildren(props.item.children)}
    </List.Item>
  );
}

function Directory(props: DirectoryProps) {
  return (
    <>
      <ListItem item={props.data} />
    </>
  );
}

export default Chose;
