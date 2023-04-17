import React, { useRef, useState } from 'react';
import styles from './index.module.scss';
import Header from '@/components/header';
import ChatItem, { ChatItemProps } from './components/chat-item';
import ChatFooter from './components/chat-footer';
import { useSearchParams } from 'react-router-dom';
import { useBaseStore } from '@/store';

const chatData: ChatItemProps[] = [];

export default function Chat() {
  const chatRef = useRef(null);
  const [params] = useSearchParams();
  const chatPageList = useBaseStore((state) => state.chatPageList);
  const _index = Number(params?.get?.('index')) || 0;
  const pushChatList = useBaseStore((state) => state.pushChatList);
  const chatList: ChatItemProps[] = chatPageList[_index]?.chatList || [];
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * 滚动到底部
   */
  const scrollToBottom = () => {
    if (chatRef?.current) {
      // @ts-ignore
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };

  return (
    <div ref={chatRef} className={styles.chat}>
      <Header title="羊肉串老板" />
      {chatList.map((item, index) => {
        return <ChatItem {...item} key={index} />;
      })}
      <ChatFooter
        onAction={(item) => {
          setLoading(true);
          if (loading) return;
          // TODO: 模拟网络请求，请求成功后setLoading(false)
          new Promise((resolve, reject) => {
            pushChatList(_index, {
              type: 'my',
              info: item.info,
            });
            scrollToBottom();
            setTimeout(() => {
              resolve(1);
            }, 1500);
          })
            .then(() => {
              pushChatList(_index, {
                type: 'chat',
                info: '好的没问题',
                name: '羊肉串老板',
              });
              scrollToBottom();
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve(1);
                }, 1500);
              });
            })
            .then(() => {
              scrollToBottom();
              setLoading(false);
            });
        }}
      />
    </div>
  );
}
