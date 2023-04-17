import React, { useRef, useState } from 'react';
import styles from './index.module.scss';
import Header from '@/components/header';
import ChatItem, { ChatItemProps } from './components/chat-item';
import ChatFooter from './components/chat-footer';
import { useSearchParams } from 'react-router-dom';
import { useBaseStore } from '@/store';

export default function Chat() {
  const chatRef = useRef(null);
  const [params] = useSearchParams();
  const chatPageList = useBaseStore((state) => state.chatPageList);
  const _index = Number(params?.get?.('index')) || 0;
  const chatPage = chatPageList?.[_index] || {};
  const pushChatList = useBaseStore((state) => state.pushChatList);
  const chatList: ChatItemProps[] = chatPage?.chatList || [];
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
      <Header title={chatPage?.name} />
      {chatList.map((item, index) => {
        return <ChatItem {...item} key={index} />;
      })}
      <ChatFooter
        actionList={chatPage?.actionList || []}
        onAction={(item) => {
          setLoading(true);
          if (loading) return;
          // TODO: 模拟网络请求，请求成功后setLoading(false)
          new Promise((resolve, reject) => {
            pushChatList(_index, {
              type: 'my',
              ...item?.chatData,
            });
            scrollToBottom();
            setTimeout(() => {
              resolve(1);
            }, 1500);
          })
            .then(() => {
              if (item?.chatData?.info === '你好') {
                pushChatList(_index, {
                  type: 'chat',
                  info:
                    '你好，我是' +
                    chatPage?.name +
                    '，请问有什么可以帮到你的吗？',
                  name: chatPage?.name,
                });
              } else {
                pushChatList(_index, {
                  type: 'chat',
                  info: '好的没问题',
                  name: '羊肉串老板',
                });
              }
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
