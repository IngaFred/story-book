import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListItem from '@/components/list-item';
import styles from './index.module.scss';

const areaList = [
  '城里',
  '城外',
  '羊肉小摊',
  '酒馆',
  '酒楼',
  '酒吧',
  '酒店',
  '酒窖',
  '酒坊',
  '酒庄',
];
/**
 * 聊天列表
 */
function ChatList() {
  const navigate = useNavigate();
  return (
    <div className={styles.chat_list}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
        (item, index) => {
          const time = new Date().toLocaleTimeString().substring(0, 5);
          const unread = Math.floor(Math.random() * 10);
          const area = areaList[unread % 10];
          return (
            <ListItem
              onClick={() => {
                navigate(`/chat?id=${item}`);
              }}
              className={styles.list_item}
              left={
                <img
                  className={styles.head_img}
                  src="/logo192.png"
                  alt="头像"
                />
              }
              right={
                <div className={styles.right}>
                  <div className={styles.time}>{time}</div>
                  <div className={styles.unread}>{area}</div>
                </div>
              }
              top={<div className={styles.name}>{area + '老板'}</div>}
            >
              <div className={styles.infos}>欢迎下次光临</div>
            </ListItem>
          );
        }
      )}
    </div>
  );
}

export default ChatList;
