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
}

/**
 * 数据库存储的数据
 */
const allActionList: ActionItem[] = [
  {
    id: 1,
    contactsId: 1,
    chapterId: 2,
    type: 'disabled',
    chatData: {
      info: '你已经吃完了，没有什么好和老板聊的了',
    },
  },
  {
    id: 2,
    contactsId: 1,
    chapterId: 2,
    chatData: {
      time: '下午',
      area: '街坊小巷',
      info: '我还能吃，再来一份',
    },
  },
  {
    id: 3,
    contactsId: 1,
    chapterId: 2,
    chatData: {
      info: '给我打包一份',
    },
  },
  {
    id: 4,
    contactsId: 2,
    chapterId: 2,
    chatData: {
      info: '你对这里不是很感兴趣',
    },
    type: 'disabled',
  },
  {
    id: 5,
    contactsId: 2,
    chapterId: 2,
    chatData: {
      info: '你好',
    },
  },
  {
    id: 6,
    contactsId: 3,
    chapterId: 2,
    chatData: {
      info: '你对这里不是很感兴趣',
    },
    type: 'disabled',
  },
  {
    id: 7,
    contactsId: 3,
    chapterId: 2,
    chatData: {
      info: '你好',
    },
  },
  {
    id: 8,
    contactsId: 4,
    chapterId: 2,
    chatData: {
      info: '你对这里不是很感兴趣',
    },
    type: 'disabled',
  },
  {
    id: 9,
    contactsId: 4,
    chapterId: 2,
    chatData: {
      info: '你好',
    },
  },
  {
    id: 10,
    contactsId: 5,
    chapterId: 2,
    chatData: {
      info: '你对这里不是很感兴趣',
    },
    type: 'disabled',
  },
  {
    id: 11,
    contactsId: 5,
    chapterId: 2,
    chatData: {
      info: '你好',
    },
  },
  {
    id: 12,
    contactsId: 6,
    chapterId: 2,
    chatData: {
      info: '你对这里不是很感兴趣',
    },
    type: 'disabled',
  },
  {
    id: 13,
    contactsId: 6,
    chapterId: 2,
    chatData: {
      info: '你好',
    },
  },
  {
    id: 14,
    contactsId: 7,
    chapterId: 2,
    chatData: {
      info: '你对这里不是很感兴趣',
    },
    type: 'disabled',
  },
  {
    id: 15,
    contactsId: 7,
    chapterId: 2,
    chatData: {
      info: '你好',
    },
  },
  {
    id: 16,
    contactsId: 8,
    chapterId: 2,
    chatData: {
      info: '你对这里不是很感兴趣',
    },
    type: 'disabled',
  },
  {
    id: 17,
    contactsId: 8,
    chapterId: 2,
    chatData: {
      info: '你好',
    },
  },
  {
    id: 18,
    contactsId: 9,
    chapterId: 2,
    chatData: {
      info: '你对这里不是很感兴趣',
    },
    type: 'disabled',
  },
  {
    id: 19,
    contactsId: 9,
    chapterId: 2,
    chatData: {
      info: '你好',
    },
  },
  {
    id: 20,
    contactsId: 10,
    chapterId: 2,
    chatData: {
      info: '你对这里不是很感兴趣',
    },
    type: 'disabled',
  },
  {
    id: 21,
    contactsId: 10,
    chapterId: 2,
    chatData: {
      info: '你好',
    },
  },
  {
    id: 22,
    contactsId: 11,
    chapterId: 2,
    chatData: {
      info: '你对这里不是很感兴趣',
    },
    type: 'disabled',
  },
  {
    id: 23,
    contactsId: 11,
    chapterId: 2,
    chatData: {
      info: '你好',
    },
    responseId: 1,
  },
];

export const defaultActionList: ActionItem[] = [
  {
    chatData: {
      info: '你对这里不是很感兴趣',
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
