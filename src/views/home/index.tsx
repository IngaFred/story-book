import React from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import ChatList from './components/chat-list';
import Search from './components/search';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      {/* 头部 */}
      <Header title="银子那些事儿 第一章" />
      {/* 搜索框 */}
      <Search />
      {/* 聊天列表 */}
      <ChatList />
      {/* 底部 */}
      <Footer />
    </div>
  );
}
