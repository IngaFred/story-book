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
      info: '进入【如意楼】',
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
  },
  {
    contactsId: 6,
    chapterId: 8,
    chatData: {
      contactsId: 5,
      type: 'my',
      info: '你好',
      time: '',
    },
    nextResponseId: 34,
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
    chapterId: 9,
    chatData: {
      contactsId: 2,
      type: 'my',
      info: '老板，那几个同伴好冷漠啊！',
      time: '',
    },
    nextResponseId: 33,
    nextChapterId: 17,
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
      info: '学习点穴大法...',
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
      info: '今天真是晦气的一天呀，不过感觉点穴已经略有小成了',
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
      info: '好嘞',
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
    contactsId: 3,
    chapterId: 17,
    chatData: {
      contactsId: 3,
      type: 'action',
      info: '这小狗死了啊 害..真可怜的小生命',
      time: '',
    },
  },
  {
    contactsId: 6,
    chapterId: 18,
    chatData: {
      contactsId: 6,
      type: 'my',
      info: '王主管好呀，最近有什么任务适合我呀',
      time: '',
    },
    nextResponseId: 32,
    nextChapterId: 38,
  },
  {
    contactsId: 6,
    chapterId: 38,
    chatData: {
      contactsId: 6,
      type: 'my',
      info: '好的呢！感谢王大主管！',
      time: '',
    },
    nextResponseId: 35,
    nextChapterId: 20,
  },
  {
    contactsId: 6,
    chapterId: 20,
    chatData: {
      contactsId: 6,
      type: 'action',
      info: '内心os：(妈卖批，这王主管，PUA有一手的..)',
      time: '',
    },
    nextResponseId: 38,
    nextChapterId: 21,
  },
  {
    contactsId: 6,
    chapterId: 20,
    chatData: {
      contactsId: 6,
      type: 'my',
      info: '好！保证对任务全心全意，永远服务于如意楼（拱手作揖）',
      time: '',
    },
    nextResponseId: 37,
    nextChapterId: 21,
  },
  {
    contactsId: 6,
    chapterId: 21,
    chatData: {
      contactsId: 6,
      type: 'my',
      info: '好的，王主管。那我走了',
      time: '',
    },
    nextChapterId: 22,
  },
  {
    contactsId: 1,
    chapterId: 22,
    chatData: {
      contactsId: 6,
      type: 'my',
      info: '最近如意楼的生活真清闲呀',
      time: '某一天下午',
    },
    nextChapterId: 23,
  },
  {
    contactsId: 1,
    chapterId: 23,
    chatData: {
      contactsId: 1,
      type: 'my',
      info: '哎呀，我真是傻波一了。这里可是所有男人梦寐以求的青楼啊！有无数妙龄美女哎！',
      time: '',
    },
    nextChapterId: 24,
  },
  {
    contactsId: 1,
    chapterId: 24,
    chatData: {
      contactsId: 1,
      type: 'my',
      info: 'emm 走！去【如意楼后楼】看美女',
      time: '',
    },
    nextChapterId: 26,
  },
  {
    contactsId: 7,
    chapterId: 26,
    chatData: {
      contactsId: 7,
      type: 'action',
      info: '两位美人在后楼池塘处赏荷花，这一位我记得是琴姬【依依】，她旁边还有一人，是她的侍女【扈扈】',
      time: '炎炎夏日下',
    },
    nextChapterId: 25,
  },
  {
    contactsId: 7,
    chapterId: 25,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '哇咔咔 这位仙女，真的好美啊！我真是一眼沉沦 😳',
      area: '后楼池塘小角落',
    },
    nextChapterId: 27,
  },
  {
    contactsId: 8,
    chapterId: 25,
    chatData: {
      contactsId: 8,
      type: 'my',
      info: '虽然有听说她挺奇怪的，但是也怪可爱的哎',
      area: '后楼池塘小角落',
    },
    // 扈扈剧情
  },
  {
    contactsId: 7,
    chapterId: 27,
    chatData: {
      contactsId: 7,
      type: 'action',
      info: '正在赏荷花的【依依】，抬头看了看天，那刺眼毒辣的太阳，竟让这娇小的弱女子突然失力，于一刹间栽倒入水中！',
      time: '',
      area: '后楼池塘旁',
    },
    nextResponseId: 40,
    nextChapterId: 28,
  },
  {
    contactsId: 7,
    chapterId: 28,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '我靠！女神！😲',
      time: '',
    },
    nextResponseId: 41,
    nextChapterId: 32,
  },
  {
    contactsId: 7,
    chapterId: 28,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '哦呦！仙女落水哎~这身材，啧啧啧😍',
      time: '',
    },
    nextChapterId: 29,
  },
  {
    contactsId: 7,
    chapterId: 29,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '她旁边有侍女，我就不过去了。害..😟我这小小贱民不配触碰那天上仙女，还是珍惜眼前这难得的福利吧！',
      time: '',
    },
    nextResponseId: 43,
    nextChapterId: 30,
  },
  {
    contactsId: 7,
    chapterId: 30,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '妈蛋！🙄 我刚刚是不是应该冲上去，揩揩油啊！本就难得的仙女落水了，靠 真后悔..😌',
      time: '',
    },
    nextResponseId: 47,
    nextChapterId: 31,
  },
  {
    contactsId: 7,
    chapterId: 30,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '今天真幸运啊！好好的饱了一次眼福。给我这平淡的一天，增添了不错的色彩🥰',
      time: '',
    },
    nextResponseId: 44,
    nextChapterId: 31,
  },
  // 救水支线结束
  {
    contactsId: 7,
    chapterId: 31,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '天色暗下来了，啥也看不到了，回去干饭吧🥣',
      time: '',
    },
    nextChapterId: 28,
  },
  // 神话的开启
  {
    contactsId: 7,
    chapterId: 32,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '仙女！稳住，我来救你！',
      time: '',
    },
    nextResponseId: 45,
    nextChapterId: 33,
  },
  {
    contactsId: 7,
    chapterId: 33,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '仙女，可别着凉了！ 这是鄙人的外衣，不嫌弃的话，就先披着吧🙂',
      time: '',
    },
    nextResponseId: 48,
    nextChapterId: 34,
  },
  {
    contactsId: 7,
    chapterId: 33,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '（反应过来的我，小脸一红）仙女你真的好美啊！ 我心跳的好快🥰',
      time: '',
    },
    nextResponseId: 50,
    nextChapterId: 35,
  },
  {
    contactsId: 7,
    chapterId: 34,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '看到你我感觉\'春风拂过泸沽湖，秋雨浸润九寨沟😀\'',
      time: '',
    },
    nextResponseId: 52,
    nextChapterId: 36,
  },
  {
    contactsId: 7,
    chapterId: 34,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '仙女的容颜真是我此生见过最美丽的！😊',
      time: '',
    },
    nextResponseId: 53,
    nextChapterId: 36,
  },
  {
    contactsId: 7,
    chapterId: 35,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '你还好吗，身体没什么不舒服吧😟',
      time: '',
    },
    nextResponseId: 62,
    nextChapterId: 39,
  },
  {
    contactsId: 7,
    chapterId: 39,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '那你靠我身上，先歇息一会。 这位是？',
      time: '',
    },
    nextResponseId: 59,
    nextChapterId: 40,
  },
  {
    contactsId: 7,
    chapterId: 36,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '下次在路上可一定要注意啊！刚刚真的把我吓到了',
      time: '',
    },
    nextResponseId: 54,
    nextChapterId: 37,
  },
  {
    contactsId: 7,
    chapterId: 37,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '我叫布脱脱。布是剪刀石头布的布，脱是脱衣服的脱。嘿嘿，很奇怪吧这名字 😁',
      time: '',
    },
    nextResponseId: 55,
    nextChapterId: 38,
  },
  {
    contactsId: 7,
    chapterId: 37,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '好男人就是我，我就是布脱脱，当然你也可以叫我小布！我是不会介意的😁',
      time: '',
    },
    nextResponseId: 57,
    nextChapterId: 38,
  },
  {
    contactsId: 7,
    chapterId: 38,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '正在构思美美的爱情故事',
      time: '',
    },
    type: 'disabled'
  },
  {
    contactsId: 7,
    chapterId: 40,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '目前她，状态不是很好啊...扈扈，你现在也慢慢回复过来了，来搭把手，我们先一起送依依回去休息',
      time: '',
    },
    // nextResponseId: 60,
    nextChapterId: 38,
  },
  {
    contactsId: 7,
    chapterId: 40,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '目前她，状态不是很好啊...扈扈，你现在也慢慢回复过来了，有手帕吗？过来帮依依她擦擦',
      time: '',
    },
    nextResponseId: 60,
    nextChapterId: 41,
  },
  {
    contactsId: 7,
    chapterId: 41,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '嗯！请相信我！🙂',
      time: '',
    },
    // nextResponseId: 60,
    nextChapterId: 38,
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
