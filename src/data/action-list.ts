/**
 * 后续会存在后端
 */
import type { ChatItemProps } from '@/views/chat/components/chat-item';

export interface ActionItem {
  // 数据库自增id
  id?: number;
  // 回答id
  nextResponseId?: number;
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
 * 可选对话信息
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
    nextResponseId: 1,
  },
  {
    id: 2,
    contactsId: 2,
    chapterId: 2,
    chatData: {
      info: '呼哧..呼哧...',
    },
    nextChapterId: 3,
  },
  {
    id: 3,
    contactsId: 2,
    chapterId: 3,
    chatData: {
      info: '感谢大侠救命之恩',
    },
    nextChapterId: 4,
    nextResponseId: 6,
  },
  {
    contactsId: 2,
    chapterId: 4,
    chatData: {
      contactsId: 2,
      chapterId: 4,
      type: 'my',
      info: '我是蒙古人，从小没爹没娘，就在这儿长大的，我烤羊肉串可厉害了',
      time: '',
    },
    nextResponseId: 8,
    nextChapterId: 5,
  },
  {
    contactsId: 2,
    chapterId: 4,
    chatData: {
      contactsId: 2,
      chapterId: 4,
      type: 'my',
      info: '关你P事',
      time: '',
    },
    nextResponseId: 7,
  },
  {
    contactsId: 2,
    chapterId: 5,
    chatData: {
      contactsId: 2,
      chapterId: 5,
      type: 'my',
      info: '请务必带带我',
      time: '',
    },
    nextResponseId: 10,
    nextChapterId: 6,
  },
  {
    contactsId: 2,
    chapterId: 5,
    chatData: {
      contactsId: 2,
      chapterId: 5,
      type: 'my',
      info: 'bye.bye.',
      time: '',
    },
  },
  {
    contactsId: 1,
    chapterId: 6,
    chatData: {
      contactsId: 1,
      chapterId: 6,
      type: 'my',
      info: '成为【如意郎】',
      time: '',
    },
    nextChapterId: 7,
  },
  {
    contactsId: 3,
    chapterId: 6,
    chatData: {
      contactsId: 3,
      chapterId: 6,
      type: 'my',
      info: '救助小狗（需要学会点穴）',
      time: '',
    },
    type: 'disabled',
  },
  {
    contactsId: 3,
    chapterId: 6,
    chatData: {
      contactsId: 3,
      chapterId: 6,
      type: 'my',
      info: '你咋了铁子',
      time: '',
    },
    nextResponseId: 11,
  },
];

export const defaultActionList: ActionItem[] = [
  {
    chatData: {
      info: '暂时无法交流，去别处看看吧',
    },
    type: 'disabled',
  },
];

export const getActionList = (contactsId?: number, chapterId?: number) => {
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
