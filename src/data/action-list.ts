/**
 * 后续会存在后端
 */
import type { ChatItemProps } from '@/views/chat/components/chat-item';

export interface ActionItem {
  // 数据库自增id
  id?: number;
  // 回答id
  responseId?: number;
  // 联系人id
  contactsId?: number;
  // 章节id
  chapterId?: number;
  // 聊天记录
  chatData?: ChatItemProps;
  // 是否可以触发事件
  type?: 'disabled' | 'active';
  // 下一章节id
  nextChapterId?: number;
}

/**
 * 数据库存储的数据
 */
const allActionList: ActionItem[] = [
  {
    id: 1,
    contactsId: 1,
    chapterId: 1,
    chatData: {
      info: '回忆一下',
    },
    nextChapterId: 2,
  },
  {
    id: 1,
    contactsId: 2,
    chapterId: 2,
    chatData: {
      info: '呼哧..呼哧...',
    },
    nextChapterId: 3,
  },
  {
    contactsId: 2,
    chapterId: 3,
    chatData: {
      info: '感谢大侠救命之恩',
    },
    nextChapterId: 4,
  },
];

export const defaultActionList: ActionItem[] = [
  {
    chatData: {
      info: '你无法与他交流',
    },
    type: 'disabled',
  },
];

export const getActionList = (contactsId: number, chapterId: number) => {
  const list = allActionList.filter(
    (item) => item.contactsId === contactsId && item.chapterId === chapterId
  );

  return list.length ? list : defaultActionList;
};

// TODO:
const responseList: any[] = [
  {
    id: 1,
    chatData: {
      info: '你好，有什么可以帮助你的吗？',
    },
  },
];

export const getResponse = (responseId: number) => {
  return responseList.find((item) => item.id === responseId);
};
