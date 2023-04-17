import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListItem from '@/components/list-item';
import { useBaseStore } from '@/store';

import styles from './index.module.scss';

/**
 * 聊天列表
 */
function ChatList() {
  const navigate = useNavigate();
  const chatPageList = useBaseStore((state) => state.chatPageList);
  return (
    <div className={styles.chat_list}>
      {chatPageList.map((item, index) => {
        const time = new Date().toLocaleTimeString().substring(0, 5);
        return (
          <ListItem
            onClick={() => {
              navigate(`/chat?index=${index}`);
            }}
            className={styles.list_item}
            left={
              <img className={styles.head_img} src="/logo192.png" alt="头像" />
            }
            right={
              <div className={styles.right}>
                <div className={styles.time}>{time}</div>
                <div className={styles.unread}>{item.area}</div>
              </div>
            }
            top={<div className={styles.name}>{item.name}</div>}
          >
            <div className={styles.infos}>
              {item?.chatList?.[item.chatList.length - 1]?.info}
            </div>
          </ListItem>
        );
      })}
    </div>
  );
}

export default ChatList;
