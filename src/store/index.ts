import { ChatItemProps } from '@/views/chat/components/chat-item';
import { create } from 'zustand';
import { Characters } from '@/views/characters/charactersSelection/components/show-card';

// const areaList = [
//   '城里',
//   '城外',
//   '羊肉小摊',
//   '酒馆',
//   '酒楼',
//   '酒吧',
//   '酒店',
//   '酒窖',
//   '酒坊',
//   '酒庄',
// ];

export interface ChatPageItem {
  id?: number;
  // 联系人名字
  name?: string;
  // 小红点
  badge?: string | number;
  // 地点
  area?: string;
  // 时间
  time?: string;
  // 聊天记录
  chatList?: ChatItemProps[];
}
export interface BaseStore {
  // 当前章节id
  chapterId: number;
  // 联系人列表
  chatPageList: ChatPageItem[];
  setState: (e: BaseStore) => void;
  // 设置章节id
  setChapterId: (index: number) => void;
  /**
   * 设置单个联系人信息
   */
  setChatPageByIndex: (index: number, e: ChatPageItem) => void;
  /**
   * 设置联系人列表
   */
  pushChatPageList: (e: ChatPageItem[]) => void;
  /**
   * 给某个联系人添加聊天记录
   * @param index 联系人索引
   * @param e 某条聊天记录
   */
  pushChatList: (index: number, e: ChatItemProps) => void;
  /**
   * 给某个联系人添加聊天记录
   * @param id 联系人id
   * @param e 某条聊天记录
   */
  pushChatListById: (id: number, e: ChatItemProps) => void;
}

/**
 * 角色选中，保存
 */
export interface ChoseStore {
  chapter?: Characters;
  setChoseChapter: (e: Characters) => void;
}
export const useChoseStore = create<ChoseStore>()((set) => ({
  chapter: undefined,
  setChoseChapter: (e: Characters) =>
    set((state: ChoseStore) => {
      return { ...state, chapter: e };
    }),
}));

/**
 * store
 */
export const useBaseStore = create<BaseStore>()((set) => ({
  chapterId: 1,
  chatPageList: [
    {
      id: 1,
      name: '主线',
      area: '街坊小巷',
      badge: 2,
      chatList: [
        {
          contactsId: 1,
          chapterId: 1,
          type: 'action',
          info: '大明朝永乐十四年(1416）某天一早，南京秦淮河畔重兵把守，全面戒严。所有这些排兵布阵，却是围绕着河内一条三层高的花船展开。河畔上，面色凝重的贵妇人，带着年轻的婢女，脚步匆匆，奔花船而来。她一介女流，却无人敢拦，突破层层音曙，硬是在最后一刻登上花船，朝着三层宴会厅快步流星。\n花船内，顶层露台传来阵阵弹琴说话声。琴姬弹弦奏乐，鸨母【林珀】热情奉茶，龟公倚墙而立，桌上两位气宇轩昂的公子，和一位面色凝重的大臣【胡刚】。精致佳肴刚刚上齐，几人举杯互相致意。宴会厅大门轰然打开，河畔上的贵妇人赫然站在门口，双目如炬，拔下自己的发钗，便向船中人刺去!众人大惊，婢女忙拦，谁知此刻竟天旋地转，飞沙走石，黑夜竟在正午降临一声枪响划破正午夜空，两具尸首令众人胆寒……',
          area: '南京秦淮河畔',
          time: '大明朝永乐十四年（1416）1月6日',
        },
        {
          contactsId: 1,
          chapterId: 1,
          type: 'action',
          info: '谁也没想到，在这艳名远播天下的【如意楼】里会出现这样的事，老鸨子【林珀】和锦衣卫都指挥使【胡刚】竟然死在了花船上。在这花船上的有当今皇上【朱棣】的二皇子汉王【朱高煦】，还有太子的儿子，也就是汉王【朱高煦】的侄子，将来要当皇帝的皇孙【朱瞻基】,还有一位大人物原本在【如意楼】里伪装成龟公他叫【王溟】是秦王（皇上朱棣的哥哥）的儿子。还有【胡刚】的夫人【史霜云】和她的女儿【胡善】，这【胡善】看起来只是【如意楼】的舞姬，但可是跟皇孙【朱瞻基】一起长大的;还有个琴姬叫【依依】是如意楼第一美女。看看这关系乱的（没事看不懂没关系)不过这乱七八糟的事情好像跟你也没多大关系，你只知道，【林珀】和【胡刚】这一死，你作为【如意楼】的低级【如意郎】，这好日子算是到了头了。',
        },
      ],
    },
  ],
  setState: (e: BaseStore) =>
    set((state: BaseStore) => {
      return { ...state, ...e };
    }),
  setChapterId: (e: number) =>
    set((state: BaseStore) => ({ ...state, chapterId: e })),
  pushChatPageList: (e: ChatPageItem[]) =>
    // @ts-ignore
    set((state: BaseStore) => {
      // console.log('pushChatPageList', e, state);
      const chatPageList = state?.chatPageList || [];
      // 如果e.id已经存在，增量添加
      e.map((item) => {
        const index = chatPageList.findIndex((e) => e.id === item.id);
        // 新增
        if (!chatPageList || !chatPageList?.[index]?.chatList || index === -1) {
          return chatPageList.push(item);
        }
        // 增量
        if (!item.chatList) {
          const newItem = {
            ...item,
            chatList: chatPageList[index].chatList,
          };
          chatPageList[index] = newItem;
          return newItem;
        }
        const newItem = {
          ...item,
          chatList: [
            ...(chatPageList?.[index]?.chatList || []),
            ...item.chatList,
          ],
        };
        chatPageList[index] = newItem;
        return newItem;
      });
      return {
        ...state,
        chatPageList: chatPageList,
      };
    }),
  setChatPageByIndex: (index: number, item: ChatPageItem) =>
    // @ts-ignore
    set((state: BaseStore) => {
      const chatPageList = state?.chatPageList || [];
      chatPageList[index] = {
        ...chatPageList[index],
        ...item,
      };
      return {
        ...state,
        chatPageList: chatPageList,
      };
    }),
  pushChatList: (index: number, chatItem: ChatItemProps) => {
    return set((state: BaseStore) => {
      // console.log('pushChatList', index, chatItem, state);
      return {
        ...state,
        chatPageList: [
          ...state.chatPageList.slice(0, index),
          {
            ...state.chatPageList[index],
            // 增加一个聊天记录
            chatList: [
              ...(state?.chatPageList?.[index]?.chatList || []),
              chatItem,
            ],
          },
          ...state.chatPageList.slice(index + 1),
        ],
      };
    });
  },
  pushChatListById: (id: number, chatItem: ChatItemProps) => {
    return set((state: BaseStore) => {
      // console.log('pushChatListById', id, chatItem, state);
      const index = state.chatPageList.findIndex((e) => e.id === id);
      return {
        ...state,
        chatPageList: [
          ...state.chatPageList.slice(0, index),
          {
            ...state.chatPageList[index],
            // 增加一个未读消息
            badge: Number(state.chatPageList[index].badge) + 1,
            // 增加一个聊天记录
            chatList: [
              ...(state?.chatPageList?.[index]?.chatList || []),
              chatItem,
            ],
          },
          ...state.chatPageList.slice(index + 1),
        ],
      };
    });
  },
}));

// pushCharacterState: (pushCharacter: Characters) => {
// 	set((state: BaseStore) => ({
// 		...state,
// 		Character: [...state?.character, pushCharacter],
// 	}));
// },
// }));
