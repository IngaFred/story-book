import React from 'react';
import styles from './index.module.scss';
import Header from '@/components/header';
import ChatItem, { ChatItemProps } from './components/chat-item';
import ChatFooter from './components/chat-footer';

const chatData: ChatItemProps[] = [
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
];
export default function index() {
  return (
    <div className={styles.chat}>
      <Header title="羊肉串老板" />
      {chatData.map((item, index) => {
        return <ChatItem {...item} key={index} />;
      })}
      <ChatFooter />
    </div>
  );
}
