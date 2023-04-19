import React from 'react';
import classnames from 'classnames';
import ListItem from '@/components/list-item';
import ChatBubble from '../chat-bubble';
import styles from './index.module.scss';

export interface ChatItemProps {
  id?: number;
  // 回答id
  nextResponseId?: number;
  // 联系人id
  contactsId?: number;
  name?: string;
  type?: 'chat' | 'my' | 'action';
  info?: string;
  area?: string;
  time?: string;
}

function ChatItem(props: ChatItemProps) {
  const { type = 'chat', info, name, area = '', time = '' } = props;
  if (type === 'action') {
    return (
      <ListItem
        top={<div className={styles.area_time}>{`${area} ${time}`}</div>}
        className={styles.chat_item}
      >
        <div className={styles.action}>{info}</div>
      </ListItem>
    );
  }
  if (type === 'my') {
    return (
      <ListItem
        top={<div className={styles.area_time}>{`${area} ${time}`}</div>}
      >
        <ListItem
          right={
            <img className={styles.head_img} src="/logo192.png" alt="头像" />
          }
          left={<div className={styles.empty_block} />}
          className={styles.chat_item}
          top={
            <div className={classnames(styles.name, styles.name_right)}></div>
          }
        >
          <ChatBubble arrow="right" info={info} />
        </ListItem>
      </ListItem>
    );
  }
  return (
    <ListItem top={<div className={styles.area_time}>{`${area} ${time}`}</div>}>
      <ListItem
        top={<div className={styles.name}>{name}</div>}
        right={<div className={styles.empty_block} />}
        left={<img className={styles.head_img} src="/logo192.png" alt="头像" />}
        className={styles.chat_item}
      >
        <ChatBubble info={info} />
      </ListItem>
    </ListItem>
  );
}

export default ChatItem;
