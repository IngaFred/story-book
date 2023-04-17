import React, { useRef, useState } from 'react';
import styles from './index.module.scss';
import Header from '@/components/header';
import ChatItem, { ChatItemProps } from './components/chat-item';
import ChatFooter from './components/chat-footer';
import { useSearchParams } from 'react-router-dom';
import { useBaseStore } from '@/store';
import { getActionList } from '@/data/action-list';
import { getChapter } from '@/data/chapter-list';
import { getChatList } from '@/data/chat-list';

export default function Chat() {
  const chatRef = useRef(null);
  const [params] = useSearchParams();
  const chatPageList = useBaseStore((state) => state.chatPageList);
  const chapterId = useBaseStore((state) => state.chapterId);
  const setChapterId = useBaseStore((state) => state.setChapterId);
  const pushChatPageList = useBaseStore((state) => state.pushChatPageList);

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
        actionList={getActionList(chatPage?.id, chapterId) || []}
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
              if (item?.nextChapterId) {
                setChapterId(item.nextChapterId);
                const _chatList = getChatList(
                  item.contactsId || 1,
                  item.nextChapterId
                );
                // 添加新的聊天人物
                const newChapter = getChapter(item.nextChapterId);
                const { addChatPages } = newChapter || {};
                if (addChatPages) {
                  pushChatPageList(addChatPages);
                }
                // 递归延迟1.5s添加聊天记录
                const _fun = (_data: ChatItemProps[]) => {
                  if (!_data?.length) return 1;
                  // 推送聊天记录
                  pushChatList(_index, _data[0]);
                  return new Promise((resolve, reject) => {
                    scrollToBottom();
                    setTimeout(() => {
                      resolve(_fun(_data.slice(1)));
                    }, 1500);
                  });
                };
                return _fun(_chatList);
              }
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
