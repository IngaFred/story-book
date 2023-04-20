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
    nextChapterId: -1,
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
      info: '正在构思',
      time: '',
    },
    type: 'disabled'
    // nextChapterId: 
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
    nextResponseId: 63,
    nextChapterId: 42,
  },
  {
    contactsId: 7,
    chapterId: 42,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '(凝重地看着她，思考了片刻) 依依姑娘得罪了！(将依依姑娘抱住，给她更多温暖)',
      time: '',
    },
    nextResponseId: 65,
    nextChapterId: 43,
  },
  {
    contactsId: 7,
    chapterId: 43,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '别哭呀 依依',
    },
    // nextResponseId: 65,
    nextChapterId: 38,
  },
  {
    contactsId: 7,
    chapterId: 43,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '(看着依依)',
    },
    nextResponseId: 66,
    nextChapterId: 44,
  },
  {
    contactsId: 7,
    chapterId: 44,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '呃...',
    },
    nextResponseId: 69,
    nextChapterId: 45,
  },
  {
    contactsId: 7,
    chapterId: 44,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '(看着依依)',
    },
    nextResponseId: 69,
    nextChapterId: 47,
  },
  {
    contactsId: 7,
    chapterId: 45,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '姑娘',
    },
    nextResponseId: 71,
    nextChapterId: 46,
  },
  {
    contactsId: 7,
    chapterId: 46,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '依依姑娘！',
    },
    nextResponseId: 72,
    nextChapterId: 38,
  },
  {
    contactsId: 7,
    chapterId: 47,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '(心脏狂跳，头脑混乱，身体不自觉地下压，相互靠近)',
    },
    nextResponseId: 73,
    nextChapterId: 48,
  },
  {
    contactsId: 7,
    chapterId: 48,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '(闭上眼睛，右手掌猛地托住依依的后脑，左手拦腰拥住，人更贴近！👩‍❤️‍👨)',
    },
    nextResponseId: 76,
    nextChapterId: 49,
  },
  {
    contactsId: 7,
    chapterId: 49,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '(不知过了多久，感觉身上越来越热，慢慢睁开了眼睛 👀)',
    },
    nextResponseId: 79,
    nextChapterId: 50,
  },
  {
    contactsId: 7,
    chapterId: 50,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '我忍不住了 啊！！(发出野兽般低沉的吼叫🔞)',
    },
    nextResponseId: 81,
    nextChapterId: 51,
  },
  {
    contactsId: 7,
    chapterId: 51,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '(抬起右手，猛地将肚兜掀开，露出一抹诱人沟壑 🈲)',
    },
    nextChapterId: 52,
  },
  {
    contactsId: 7,
    chapterId: 52,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '(看着面前那道诱人沟壑，眼神变得炙热起来，慢慢低下头，将嘴唇印在上面 👄)',
    },
    nextResponseId: 83,
    nextChapterId: 53,
  },
  {
    contactsId: 7,
    chapterId: 53,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '🥵 啊~~嗷！💦',
    },
    nextResponseId: 89,
    nextChapterId: 54,
  },
  {
    contactsId: 7,
    chapterId: 54,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '...！！！！！！',
    },
    nextResponseId: 99,
    nextChapterId: 55,
  },
  {
    contactsId: 7,
    chapterId: 55,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '(一个暴跳💥💥💥起来！立马给依依披上外衣遮住，然后自己拉条裤衩 在那位怒目婆婆的注视下，一动不动！)',
    },
    nextResponseId: 94,
    nextChapterId: 56,
  },
  {
    contactsId: 7,
    chapterId: 56,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '(我看着婆婆那双眼睛，里面充满了绝望，痛苦，还有一丝哀求) 👁️👁️',
    },
    nextResponseId: 102,
    nextChapterId: 57,
  },
  // --
  {
    contactsId: 7,
    chapterId: 56,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '老人家，您听我解释！ 事情不是您想的那样！😧',
    },
    nextResponseId: 94,
    //
    nextChapterId: 38,
  },
  // ---
  {
    contactsId: 7,
    chapterId: 56,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '丈母娘！事情已经发生了，我们要接受现实！😦',
    },
    nextResponseId: 94,
    //
    nextChapterId: 38,
  },
  {
    contactsId: 7,
    chapterId: 57,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '(看着昏倒在一旁的依依，声音颤抖着)婆婆，我求您了，先送依依回家去吧，可..可别落下什么病根..路上我任您处置..',
    },
    nextResponseId: 105,
    nextChapterId: 58,
  },
  {
    contactsId: 7,
    chapterId: 58,
    chatData: {
      contactsId: 7,
      type: 'my',
      info: '我求您了！！！(扑通一下)',
    },
    nextResponseId: 106,
    nextChapterId: 59,
  },
  {
    contactsId: 7,
    chapterId: 59,
    chatData: {
      contactsId: 7,
      type: 'action',
      info: '这两巴掌，大力的让我脸颊疼的几乎麻木，嘴角也缓缓的渗出了一抹殷红，耳朵一阵一阵的轰鸣。突然！胸腔内凹，瞬间感觉到剧烈的疼痛，不能吸气！我躺在地上用力捂着胸口，眼球发颤，意识模糊！',
    },
    nextResponseId: 110,
    nextChapterId: 38,
  },
  // chapterId: 59,nextChapterId: 60

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
