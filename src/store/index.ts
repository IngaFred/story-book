import { ChatItemProps } from '@views/chat/components/chat-item';
import { create } from 'zustand';

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
  id: number;
  name?: string;
  area?: string;
  chatList?: ChatItemProps[];
}
export interface BaseStore {
  chatPageList: ChatPageItem[];
  setState: (e: BaseStore) => void;
  /**
   * 设置联系人列表
   */
  setChatPageList: (e: ChatPageItem[]) => void;
  /**
   * 给某个联系人添加聊天记录
   * @param index 联系人索引
   * @param e 某条聊天记录
   */
  pushChatList: (index: number, e: ChatItemProps) => void;
}
/**
 * store
 */
export const useBaseStore = create<BaseStore>()((set) => ({
  chatPageList: [
    {
      id: 1,
      name: '主线',
      chatList: [
        {
          type: 'action',
          info: '今天我在无目的的闲逛中，走进了一些街坊小巷。这些地方是城市里的缝隙，显得有些狭窄，但是在热闹喧嚣的都市中，它们显得格外静谧。我看到了许多人情味的小店，茶馆、小餐馆、理发店、开锁铺......虽然这些小店铺在摩登的城市里微不足道，但却以它们特有的方式描绘着城市的生活和历史。在这些小巷里走动，让我感受到了一种本真和自然的氛围，也让我对这座城市有了更深刻的认识。',
          area: '街坊小巷',
          time: '上午',
        },
        {
          type: 'chat',
          info: '烤羊肉串，外焦里嫩，肉香四溢，让你回味无穷！',
          name: '羊肉串老板',
          area: '街坊小巷',
          time: '正午',
        },
        { type: 'my', info: '羊肉串多少钱一串？' },
        {
          type: 'chat',
          info: '一串10元，一盘30元，一份50元，一份100元，一份200元',
          name: '羊肉串老板',
        },
        { type: 'my', info: '我要一份200元的' },
        {
          type: 'chat',
          info: '好的，马上给你准备',
          name: '羊肉串老板',
        },
        {
          type: 'action',
          info: '羊肉串老板给你准备了一份200元的羊肉串',
          area: '街坊小巷',
          time: '下午',
        },
        {
          type: 'chat',
          info: '羊肉串 50 串 ，肉夹馍 50 个，蔬菜拼盘（包括番茄、黄瓜、辣椒等）1 份，酸奶 1 瓶，凉拌木耳 1 份，凉皮 1 份',
          name: '羊肉串老板',
        },
        {
          type: 'my',
          info: '再加两瓶饮料',
        },
        {
          type: 'chat',
          info: '好的，马上给你准备',
          name: '羊肉串老板',
        },
        {
          type: 'action',
          info: '羊肉串老板给你开了两瓶小酒',
          area: '街坊小巷',
          time: '正午',
        },
        {
          type: 'action',
          info: '你付给了羊肉串老板 210 元',
        },
        {
          type: 'action',
          info: '吃了2个小时，终于吃完了，你吃的很开心，拍拍屁股准备走人',
          area: '街坊小巷',
          time: '下午',
        },
        {
          type: 'chat',
          info: '欢迎下次光临～',
          name: '羊肉串老板',
        },
      ],
    },
    {
      id: 2,
      name: '城里老板',
    },
    {
      id: 3,
      name: '城外老板',
    },
    {
      id: 4,
      name: '羊肉小摊老板',
    },
    {
      id: 5,
      name: '酒馆老板',
    },
    {
      id: 6,
      name: '酒楼老板',
    },
    {
      id: 7,
      name: '酒吧老板',
    },
    {
      id: 8,
      name: '酒店老板',
    },
    {
      id: 9,
      name: '酒窖老板',
    },
    {
      id: 10,
      name: '酒坊老板',
    },
    {
      id: 11,
      name: '酒庄老板',
    },
  ],
  setState: (e: BaseStore) =>
    set((state: BaseStore) => {
      return { ...state, ...e };
    }),
  setChatPageList: (e: ChatPageItem[]) =>
    set((state: BaseStore) => ({ ...state, chatPageList: e })),
  pushChatList: (index: number, chatItem: ChatItemProps) => {
    return set((state: BaseStore) => ({
      ...state,
      chatPageList: [
        ...state.chatPageList.slice(0, index),
        {
          ...state.chatPageList[index],
          chatList: [
            ...(state?.chatPageList?.[index]?.chatList || []),
            chatItem,
          ],
        },
        ...state.chatPageList.slice(index + 1),
      ],
    }));
  },
}));
