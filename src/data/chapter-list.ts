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
            info: '你看见路边有一只小狗受伤了，血流不止',
            area: '',
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
            info: '你因为识字不多，武功也基本不会，但看着高大威 猛有个好样儿，就给你分配到三级(最低级) 【如意郎】 队伍里吧',
            time: '',
          },
        ],
      },
      {
        id: 4,
        name: '三级【如意郎】小茶',
        area: '如意楼',
      },
      {
        id: 5,
        name: '三级【如意郎】小灰',
        area: '如意楼',
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
        chatList: [
          {
            id: 12,
            contactsId: 1,
            type: 'action',
            info: '你成为了【如意郎】【如意郎】 分三个等级，等级之间地以武艺、文化、特长区分，只有同等级的【如意郎】们住在一个院内，互相之间也不过问别人的工作情况，不同等级的【如意郎】之间几乎不见面。',
            time: '',
          },
        ],
      },
    ],
  },
];

export const getChapter = (id: number) => {
  return chapterTree.find((item) => item.id === id);
};
