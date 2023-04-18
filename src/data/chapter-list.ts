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
export const chapterTree: any[] = [
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
        area: '城里',
        chatList: [
          {
            id: 3,
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
];

export const getChapter = (id: number) => {
  return chapterTree.find((item) => item.id === id);
};
