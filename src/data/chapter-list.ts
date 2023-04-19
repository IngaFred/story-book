import { ChatPageItem } from '@/store';

export interface ChapterTreeItem {
  // id
  id: number;
  // 章节名字
  name: string;
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
            chapterId: 4,
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
            chapterId: 6,
            type: 'action',
            info: '接着，你跟着【林珀】在如意楼里成为了一名低级的【如意郎】 【如意郎】 也分三个等级，等级之间地以武艺、文化、特长区分，只有同等级的【如意郎】们住在一个院内，互相之间也不过问别人的工作情况，不同等级的【如意郎】之间几乎不见面。说你是【如意郎】，但你因为识字不多，武功也基本不会，但看着高大威 猛有个好样儿，被【林珀】编进了三级(最低级) 【如意郎】 队伍里。【林珀】 也，教了你些武功，比如点穴什么的，她说学会了点穴最差也能止血治伤。你觉得自己 学会了点穴，总想试验试验，但有一次你看见路边的野狗腿部受伤了，你就跑过去在它伤口周边点了几下，嘿!还真灵!它不但不流血了，还站起来了，还她妈追了你两条街!辛亏你紧急关头发挥了正常的跑步水准。',
            area: '',
            time: '大明朝永乐六年（1408）',
          },
        ],
      },
    ],
  },
];

export const getChapter = (id: number) => {
  return chapterTree.find((item) => item.id === id);
};
