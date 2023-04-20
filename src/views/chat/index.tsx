import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';
import Header from '@/components/header';
import ChatItem, { ChatItemProps } from './components/chat-item';
import ChatFooter from './components/chat-footer';
import { useSearchParams } from 'react-router-dom';
import { useBaseStore } from '@/store';
import { getActionList } from '@/data/action-list';
import { getChapter } from '@/data/chapter-list';
import { getChatById } from '@/data/chat-list';

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
  const pushChatListById = useBaseStore((state) => state.pushChatListById);
  const setChatPageByIndex = useBaseStore((state) => state.setChatPageByIndex);

  const chatList: ChatItemProps[] = chatPage?.chatList || [];

  useEffect(() => {
    // 清空未读消息
    setChatPageByIndex(_index, {
      badge: 0,
    });
  }, []);
  useEffect(() => {
    scrollToBottom();
  }, [chatPageList]);

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
          console.log('onAction', item);

          // TODO: 模拟网络请求，请求成功后setLoading(false)
          new Promise((resolve, reject) => {
            // 推送聊天记录
            pushChatList(_index, {
              type: 'my',
              ...item?.chatData,
            });
            setTimeout(() => {
              resolve(1);
            }, 1500);
          }).then(() => {
            // 递归延迟1.5s添加聊天记录
            const addChats = ({
              chatId,
              chatPageId,
              index,
            }: {
              chatId?: number;
              chatPageId?: number;
              index?: number;
            }) => {
              console.log('chatId', chatId);
              const callback = new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve(1);
                }, 1500);
              });
              if (!chatId) return callback;
              const responseInfo = getChatById(chatId);
              if (!responseInfo) return callback;
              // 推送聊天记录
              // 根据index推送
              if (Number(index) > -1) {
                pushChatList(index || _index, responseInfo);
              }
              // 根据id推送
              if (chatPageId) {
                pushChatListById(chatPageId, responseInfo);
              }
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve(
                    addChats({
                      chatId: responseInfo?.nextResponseId,
                      chatPageId: chatPageId,
                      index: index,
                    })
                  );
                }, 1500);
              });
            };

            // 触发下一个对话
            if (item?.nextResponseId) {
              addChats({
                chatId: item.nextResponseId,
                index: _index,
              });
            }

            // 触发下一个章节
            if (item?.nextChapterId) {
              setChapterId(item.nextChapterId);
              // 添加新的聊天人物
              const newChapter = getChapter(item.nextChapterId);
              const { addChatPages } = newChapter || {};
              if (!addChatPages) {
                return;
              }
              if (addChatPages && addChatPages?.length) {
                // TODO: 增量添加，不是直接覆盖
                pushChatPageList(addChatPages);
              }
              // 给每个新增对话添加聊天记录
              for (let i = 0; i < addChatPages.length; i++) {
                const _item = addChatPages[i];
                console.log('_item', _item);
                console.log('chatPageList[_index]', chatPageList[_index]);
                const _chatList = _item?.chatList || [];
                if (!_chatList?.length) continue;
                const { nextResponseId } = _chatList[_chatList.length - 1];

                if (_item.id === chatPageList[_index].id) {
                  addChats({
                    chatId: nextResponseId,
                    index: _index,
                  });
                } else {
                  addChats({
                    chatId: nextResponseId,
                    chatPageId: _item?.id,
                  });
                }
              }
            }
          });
        }}
      />
    </div>
  );
}
