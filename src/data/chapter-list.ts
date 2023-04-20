import { ChatPageItem } from '@/store';

export interface ChapterTreeItem {
  // id
  id: number;
  // 章节名字
  name?: string;
  // 联系人列表
  addChatPages?: ChatPageItem[];
}
/**
 * 章节信息
 */
export const chapterTree: ChapterTreeItem[] = [
  {
    id: 1,
    name: '主线',
  },
  {
    id: 2,
    name: '主线',
    addChatPages: [
      {
        id: 2,
        name: '林珀',
        area: '大漠',
        badge: 1,
        chatList: [
          {
            contactsId: 2,
            type: 'action',
            info: '这一天你正在大漠跟一只黄羊和赛跑(其实是想打死黄羊吃肉)，眼见你被黄羊用角顶着翻了几个跟头，突然黄羊不动了，你喘着粗气，惊魂未定',
            area: '大漠',
            time: '',
            nextResponseId: 4,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: '主线',
    addChatPages: [
      {
        id: 1,
        name: '主线',
        area: '城里',
        badge: 1,
        chatList: [
          {
            contactsId: 1,
            type: 'action',
            info: '接着，你跟着【林珀】来到了如意楼',
            // info: '【林珀】 也，教了你些武功，比如点穴什么的，她说学会了点穴最差也能止血治伤。你觉得自己 学会了点穴，总想试验试验，但有一次你看见路边的野狗腿部受伤了，你就跑过去在它伤口周边点了几下，嘿!还真灵!它不但不流血了，还站起来了，还她妈追了你两条街!辛亏你紧急关头发挥了正常的跑步水准。',
            area: '',
            time: '大明朝永乐六年（1408）',
          },
        ],
      },
      {
        id: 3,
        name: '路边的小黑狗',
        area: '城里',
        badge: 1,
        chatList: [
          {
            contactsId: 3,
            type: 'action',
            info: '你看见路边有一只小狗腿部受伤了，血流不止',
            time: '大明朝永乐六年（1408）',
            nextResponseId: 11,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    addChatPages: [
      {
        id: 2,
        name: '林珀',
        area: '如意楼',
        badge: 1,
        chatList: [
          {
            contactsId: 3,
            name: '林珀',
            area: '如意楼',
            type: 'chat',
            info: '你因为识字不多，武功也基本不会，但看着高大威 猛有个好样儿，就给你分配到三级(最低级) 【如意郎】 队伍里吧！去认识一下，你的同伴和上级吧',
            time: '',
          },
        ],
      },
      {
        id: 4,
        name: '【如意郎】小茶',
        area: '如意楼',
      },
      {
        id: 5,
        name: '【如意郎】小灰',
        area: '如意楼',
      },
      {
        id: 6,
        name: '【主管】 王溟',
        area: '如意楼 阁居',
      },
    ],
  },
  {
    id: 8,
    addChatPages: [
      {
        id: 1,
        name: '主线',
        area: '如意楼',
        badge: 1,
        chatList: [
          {
            id: 12,
            contactsId: 1,
            type: 'action',
            info: '你成为了【如意郎】。这里分三个等级，等级之间地以武艺、文化、特长区分，只有同等级的【如意郎】们住在一个院内，互相之间也不过问别人的工作情况，不同等级的【如意郎】之间几乎不见面。',
            time: '',
          },
        ],
      },
    ],
  },
  {
    id: 21,
    addChatPages: [
      {
        id: 1,
        name: '主线',
        area: '如意楼',
        badge: 2,
        chatList: [
          {
            id: 13,
            contactsId: 1,
            type: 'action',
            info: '因为你自小就来到了南京，南京话已经成为了你的语言，蒙古语你已经基本不会说了，也是由于你口音纯正、跑步速度快，【林珀】 和【王溟】经常都会安排你去接头，拿情报，夹个包袱送钱，但时间都是在半夜里。在任务过程中你从没跟其他人接触过。',
            time: '来到如意楼这段时间',
          },
          {
            id: 14,
            contactsId: 1,
            type: 'action',
            info: '慢慢的，你知道了你们【如意楼】不简单，这里明面上是全南京城最大的青楼，其实是个情报贩卖机构，老板【林珀】更是了不得，传说中【如意楼】酒窖的密室里藏着各色毒药，还有无数朝廷命官、大明国内或其他国的隐秘资料，但你因为身份低微，从来没进去过。',
            time: '',
          },
        ],
      },
    ],
  },
  {
    id: 24,
    addChatPages: [
      {
        id: 1,
        name: '主线',
        area: '如意楼',
        chatList: [
          {
            id: 15,
            contactsId: 1,
            type: 'action',
            info: '在【如意楼】里漂亮姑娘有很多，最美的可算是琴姬【依依】了，听说她只给达官显贵弹琴。她还有一位使唤丫头【扈扈】，她总是做出神神秘秘的举动，令人捉摸不透。',
            time: '',
          },
          // {
          //   id: 16,
          //   contactsId: 7,
          //   type: 'action',
          //   info: '两位美人在后楼池塘处赏荷花，这一位我记得是琴姬【依依】，她旁边还有一人',
          //   time: '炎炎夏日下',
          // },
          // {
          //   id: 17,
          //   contactsId: 8,
          //   type: 'action',
          //   info: '两位美人在后楼池塘处赏荷花，这一位我记得是琴姬的侍女【扈扈】',
          //   time: '炎炎夏日下',
          // },
        ],
      },
      {
        id: 7,
        name: '【琴姬】 依依',
        area: '如意楼 后楼',
      },
      {
        id: 8,
        name: '【丫头】 扈扈',
        area: '如意楼 后楼',
      },
    ],
  },
  {
    id: 53,
    addChatPages: [
      {
        id: 1,
        name: '主线',
        area: '如意楼',
        chatList: [
          // {
          //   id: 15,
          //   contactsId: 1,
          //   type: 'action',
          //   info: '在【如意楼】里漂亮姑娘有很多，最美的可算是琴姬【依依】了，听说她只给达官显贵弹琴。她还有一位使唤丫头【扈扈】，她总是做出神神秘秘的举动，令人捉摸不透。',
          //   time: '',
          // },
        ],
      },
      {
        id: 9,
        name: '【依依的老母亲】',
        area: '如意楼 后楼',
      },
    ],
  },
];

export const getChapter = (id: number) => {
  return chapterTree.find((item) => item.id === id);
};
