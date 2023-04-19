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
      type: 'my',
      info: '进入如意楼',
      time: '',
    },
    nextChapterId: 7,
  },
  {
    contactsId: 3,
    chapterId: 6,
    chatData: {
      contactsId: 3,
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
      type: 'my',
      info: '你咋了铁子',
      time: '',
    },
    nextResponseId: 11,
  },
  {
    contactsId: 3,
    chapterId: 7,
    chatData: {
      contactsId: 3,
      type: 'my',
      info: '救助小狗（需要学会点穴）',
      time: '',
    },
    type: 'disabled',
  },
  {
    contactsId: 3,
    chapterId: 7,
    chatData: {
      contactsId: 3,
      type: 'my',
      info: '你咋了铁子',
      time: '',
    },
    nextResponseId: 11,
  },
  {
    contactsId: 2,
    chapterId: 7,
    chatData: {
      contactsId: 3,
      type: 'my',
      info: '谢谢老板',
      time: '',
    },
    nextChapterId: 8,
  },

  {
    contactsId: 4,
    chapterId: 7,
    chatData: {
      contactsId: 5,
      type: 'my',
      info: '你好',
      time: '',
    },
    nextResponseId: 12,
  },
  {
    contactsId: 5,
    chapterId: 7,
    chatData: {
      contactsId: 5,
      type: 'my',
      info: '你好',
      time: '',
    },
    nextResponseId: 13,
  },
  {
    contactsId: 4,
    chapterId: 8,
    chatData: {
      contactsId: 5,
      type: 'my',
      info: '你好',
      time: '',
    },
    nextResponseId: 14,
  },
  {
    contactsId: 5,
    chapterId: 8,
    chatData: {
      contactsId: 5,
      type: 'my',
      info: '你好',
      time: '',
    },
    nextResponseId: 15,
    nextChapterId: 9,
  },
  {
    contactsId: 3,
    chapterId: 8,
    chatData: {
      contactsId: 3,
      type: 'my',
      info: '救助小狗（需要学会点穴）',
      time: '',
    },
    type: 'disabled',
  },
  {
    contactsId: 3,
    chapterId: 8,
    chatData: {
      contactsId: 3,
      type: 'my',
      info: '你咋了铁子',
      time: '',
    },
    nextResponseId: 11,
  },
  {
    contactsId: 2,
    chapterId: 9,
    chatData: {
      contactsId: 2,
      type: 'my',
      info: '老板，你能不能教我一点武功呀？',
      time: '',
    },
    nextResponseId: 17,
    nextChapterId: 10,
  },
  {
    contactsId: 2,
    chapterId: 10,
    chatData: {
      contactsId: 2,
      type: 'my',
      info: '谢谢老板 啊！不对，谢谢师傅',
      time: '',
    },
    nextResponseId: 19,
    nextChapterId: 11,
  },
  {
    contactsId: 2,
    chapterId: 11,
    chatData: {
      contactsId: 2,
      type: 'action',
      info: '正在努力学习点穴大法中...',
      time: '',
    },
    nextChapterId: 19,
  },
  {
    contactsId: 3,
    chapterId: 19,
    chatData: {
      contactsId: 3,
      type: 'my',
      info: '使用刚学的点穴大法',
      time: '',
    },
    nextResponseId: 21,
    nextChapterId: 12,
  },
  {
    contactsId: 3,
    chapterId: 19,
    chatData: {
      contactsId: 3,
      type: 'my',
      info: '你咋了铁子',
      time: '',
    },
    nextResponseId: 11,
  },
  {
    contactsId: 3,
    chapterId: 12,
    chatData: {
      contactsId: 3,
      type: 'my',
      info: '不好有杀意，快跑！',
      time: '',
    },
    nextResponseId: 23,
    nextChapterId: 13,
  },
  {
    contactsId: 3,
    chapterId: 12,
    chatData: {
      contactsId: 3,
      type: 'my',
      info: '哟~ 救了你还嚣张 小样！',
      time: '',
    },
    nextResponseId: 24,
    nextChapterId: 14
  },
  {
    contactsId: 3,
    chapterId: 13,
    chatData: {
      contactsId: 3,
      type: 'my',
      info: '芜湖！ 还好老子跑的快。这狗看着可怜，实着吓人的很呐',
      time: '',
    },
    nextResponseId: 28,
    nextChapterId: 15
  },
  {
    contactsId: 3,
    chapterId: 14,
    chatData: {
      contactsId: 3,
      type: 'my',
      info: '斯..卧槽！敢咬老子 吃我一大飞脚！',
      time: '',
    },
    nextResponseId: 26,
    nextChapterId: 15,
  },
  {
    contactsId: 3,
    chapterId: 15,
    chatData: {
      contactsId: 3,
      type: 'my',
      info: '今天真是晦气地一天呀，不过感觉点穴已经略有小成了',
      time: '',
    },
    nextChapterId: 16
  },
  {
    contactsId: 2,
    chapterId: 16,
    chatData: {
      contactsId: 3,
      type: 'my',
      info: '师傅，我点穴功法已经小成了',
      time: '',
    },
    nextResponseId: 29,
    nextChapterId: 17,
  },
  {
    contactsId: 2,
    chapterId: 17,
    chatData: {
      contactsId: 3,
      type: 'my',
      info: '好勒',
      time: '',
    },
    nextChapterId: 18,
  },
  {
    contactsId: 2,
    chapterId: 17,
    chatData: {
      contactsId: 3,
      type: 'my',
      info: '啊！ 可是，我想睡觉摆烂哎..',
      time: '',
    },
    nextResponseId: 31,
    nextChapterId: 18,
  },
  {
    contactsId: 1,
    chapterId: 18,
    chatData: {
      contactsId: 3,
      type: 'my',
      info: '寻找【王溟】',
      time: '',
    },
    nextResponseId: 32,
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
