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
            contactsId: 1,
            chapterId: 4,
            type: 'action',
            info: '这一天你正在大漠跟一只黄羊和赛跑(其实是想打死黄羊吃肉)，眼见你被黄羊用角顶着翻了几个跟头，突然黄羊不动了，你喘着粗气，惊魂未定',
            area: '大漠',
            time: '',
          },
          {
            contactsId: 1,
            chapterId: 4,
            name: '林珀',
            type: 'chat',
            info: '小兄弟，你没事吧',
          },
          {
            contactsId: 1,
            chapterId: 4,
            type: 'action',
            info: '一抬头，只见一个身着紫色长衫，手持宝剑的女子，英姿飒爽，正关切地望着你，见你看他，爽朗一笑。',
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
