import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListItem from '@/components/list-item';
import { useBaseStore } from '@/store';

import styles from './index.module.scss';
import { Badge, Ellipsis } from 'antd-mobile';

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
            key={index}
            onClick={() => {
              navigate(`/chat?index=${index}`);
            }}
            className={styles.list_item}
            left={
              <div className={styles.head_img_wrap}>
                <Badge content={item?.badge || null}>
                  <img
                    className={styles.head_img}
                    src="/logo192.png"
                    alt="头像"
                  />
                </Badge>
              </div>
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
              <Ellipsis
                direction="end"
                content={
                  item?.chatList?.[item.chatList.length - 1]?.info as string
                }
              />
              {/* {item?.chatList?.[item.chatList.length - 1]?.info} */}
            </div>
          </ListItem>
        );
      })}
    </div>
  );
}

export default ChatList;
